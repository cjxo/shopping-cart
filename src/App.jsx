//import { useState } from 'react';
import "./App.css";
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import {
  useEffect,
  useState,
  useMemo,
} from "react";

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
  const [cartState, setCartState] = useState([]);
  const [clothing, setClothing] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

        console.log(result);
        return result;
      };
      setClothing([
        ...mapToBasicProduct(values[0], null, "Clothes"),
        ...mapToBasicProduct(values[1], null, "Clothes"),
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

  const cart = useMemo(() => {
    const find = (product) => {
      const result = cartState.find((entry) => {
        return entry.product === product;
      });
      return result;
    };

    const exists = (product) => {
      return find(product) !== undefined;
    };

    const setQty = (product, quantity) => {
      setCartState((prevState) => {
        const found = cartState.find((entry) => {
          return entry.product === product;
        });
  
        if (found) {
          return prevState.map(entry => 
            (entry.product === product)
            ? { ...entry, quantity }
            : entry
          );
        } else {
          return [...prevState, { product, quantity }];
        }
      });
    }
  
    const remove = (product) => {
      setCartState((prevState) => {
        const idx = cartState.findIndex((entry) => {
          return entry.product === product;
        });
    
        if (idx !== -1) {
          return prevState.filter((_, index) => index !== idx);
        } else {
          return prevState;
        }
      });
    };

    const state = () => {
      return cartState;
    };
    return { find, exists, setQty, remove, state };
  }, [cartState]);
  
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
              <Outlet context={[clothing, jewelery, shoes, cart]} />
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