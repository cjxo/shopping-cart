//import { useState } from 'react';
import "./App.css";
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useEffect, useState } from "react";

async function loadProduct(url) {
  try {
    const data = await fetch(url, { mode: "cors" });
    if (data.status >= 400) {
      throw new Error("server error");
    }

    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

const LoadingScreen = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const key = setInterval(() => {
      setDots((d) => {
        if (d.length > 2) {
          return "";
        } else {
          return d + ".";
        }
      });
      
    }, 250);

    return () => {
      clearInterval(key);
    }
  }, []);

  return (
    <div className="loading-wrapper">
      <div className="loading-circle"></div>
      <div>Fetching Products{dots}</div>
    </div>
  )
}

const App = () => {
  const [clothing, setClothing] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  isLoading;

  useEffect(() => {
    Promise.all([
      loadProduct("https://fakestoreapi.com/products/category/men's%20clothing"),
      loadProduct("https://api.escuelajs.co/api/v1/products/?categoryId=1"),
      loadProduct("https://fakestoreapi.com/products/category/women's%20clothing"),
      loadProduct("https://fakestoreapi.com/products/category/jewelery"),
      loadProduct("https://api.escuelajs.co/api/v1/products/?categoryId=4"),
    ])
    .then((values) => {
      const mapToBasicProduct = (json, upTo, type) => {
        let result = [];
        const length = upTo === null ? json.length : upTo;
        for (let i = 0; i < length; ++i) {
          const item = json[i];
          result.push(
            {
              type: type,
              name: item.title,
              price: "$" + item.price,
              description: item.description,
              url: item.image ? item.image : item.images[0]
            }
          );
        }

        return result;
      };
      setClothing([
        ...mapToBasicProduct(values[0], null, "Clothes"),
        ...mapToBasicProduct(values[1], 7, "Clothes"),
        ...mapToBasicProduct(values[2], null, "Clothes")
      ]);
      setJewelery(mapToBasicProduct(values[3], null, "Jewelery"));
      setShoes(mapToBasicProduct(values[4], null, "Shoes"));
    })
    .finally(() => setIsLoading(false));

    /*
    fetch('https://fakestoreapi.com/products/categories')
      .then(res=>res.json())
      .then(json=>console.log(json));

    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(res=>res.json())
      .then(json=>console.log(json));*/
  }, []);

  return (
    <>
      {
        isLoading ? (
          <>
            <LoadingScreen />
          </>
        ) :  (
          <>
            <NavBar />
            <main>
              <Outlet context={[clothing, jewelery, shoes]} />
            </main>

            <footer>
              <div></div>
              <div>© 2024 Fashion Hive. All rights reserved.</div>
            </footer>
          </>
        )
      }
    </>
  );
}

export default App;