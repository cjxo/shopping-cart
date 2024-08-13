
import { useState } from "react";

import AddToCartImg from "../assets/icons/cart-plus.svg";
import RemoveToCartImg from "../assets/icons/cart-minus.svg";

import PropTypes from "prop-types";

const QuickViewCard = ({ name, price, imgUrl, onProductExpandToggle }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  
  const onAddToCart = () => {
    setAddedToCart(!addedToCart);
  };

  return (
    <div className="quick-view-card">
      <button
        onClick={onProductExpandToggle}
      >
        <img src={imgUrl} className="product-img" />
      </button>
      <div className="card-interactable">
        <div className="name-and-price">
          <button
            onClick={onProductExpandToggle}
          >
            <h3>{name}</h3>
          </button>
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

QuickViewCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  onProductExpandToggle: PropTypes.func.isRequired
}

export default QuickViewCard;