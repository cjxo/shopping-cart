import { useOutletContext } from "react-router-dom";
import { useState } from "react";

import PropTypes from "prop-types";

import ListCollection from "../components/ListCollection";

import AddToCartImg from "../assets/icons/cart-plus.svg";
import RemoveToCartImg from "../assets/icons/cart-minus.svg";

const QuickViewCard = ({ name, price, imgUrl }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  
  const onAddToCart = () => {
    setAddedToCart(!addedToCart);
  };

  return (
    <div className="quick-view-card">
      <img src={imgUrl} />
      <div className="card-interactable">
        <div className="name-and-price">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
        <button
          className={addedToCart ? "added" : ""}
          onClick={onAddToCart}
        >
          <img
            src={addedToCart ? RemoveToCartImg : AddToCartImg}
            alt="add to cart icon"
          />
        </button>
        
      </div>
    </div>
  )
};

const ShopPage = () => {
  const [clothing, jewelery, shoes] = useOutletContext();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const entryTexts = ["All", "Clothing", "Jewelery", "Shoes"];
  
  const onSelectCategory = (idx) => {
    return () => {
      setSelectedCategory(idx);
    };
  };

  const quickViewCardMapper = (array) => {
    return array.map(item => {
      console.log("Hi")
      return (
        <QuickViewCard
          key={item.name}
          name={item.name}
          price={item.price}
          imgUrl={item.url}
        />
      )
    });
  };

  return (
    <>
      <section className="shoppage-wrapper">
        <h1>Shop</h1>
        <section className="shoppage-main">
          <section>
            <h2>Collection</h2>
            <ListCollection
              textList={entryTexts}
              selectedCategory={selectedCategory}
              onSelectCategory={onSelectCategory}
            />
          </section>

          <section className="displayed-items">
            {
              (selectedCategory === 0) ? (
                quickViewCardMapper([...clothing, ...jewelery, ...shoes])
              ) : (selectedCategory === 1) ? (
                quickViewCardMapper(clothing)
              ) : (selectedCategory === 2) ? (
                quickViewCardMapper(jewelery)
              ) : (
                quickViewCardMapper(shoes)
              )
            }
          </section>
        </section>
      </section>
    </>
  );
}

QuickViewCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
}

export default ShopPage;