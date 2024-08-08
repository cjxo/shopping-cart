//import { useState } from "react";
import PropTypes from 'prop-types';

import ScrollerLeftImg from "../assets/icons/menu-left.svg";
import ScrollerRightImg from "../assets/icons/menu-right.svg";

const SliderCardProduct = ({ product }) => {
  return (
    <div
      className="slider-card"
    >
      {/* TODO: ACTUAL IMAGE */}
      {/*<div className="image-placeholder"></div>*/}
      {<img src={product.url}></img>}

      {/*
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${product.url})`
        }}
      >
      </div>*/}

      <div className="displayed-item-type-name-price-container">
        <h4>{product.type}</h4>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>

      <button
        className="displayed-item-buy-now"
        type="button">
        Buy Now
      </button>
    </div>
  );
}

const Slider = ({ displayedProducts }) => {
  const handleOnClick = (e) => {
    const target = e.target;
    const parent = target.parentNode;

    const containerGap = 12;
    const sliderCardBorderHalf = 0.5;
    if (parent.nextSibling) {
      console.log(parent.nextSibling.children)
      parent.nextSibling.scrollLeft += -(parent.nextSibling.children[0].clientWidth + containerGap) - sliderCardBorderHalf;
    } else {
      parent.previousSibling.scrollLeft += parent.previousSibling.children[0].clientWidth + containerGap + sliderCardBorderHalf;
    }
  };

  return (
    <section className="slider">
      <button
        className="scroller scroller-left"
        onClick={handleOnClick}
        data-testid="scroll-left-btn"
      >
        <img src={ScrollerLeftImg} alt="scroll left" />
      </button>

      <section className="slider-wrapper">
        {
          displayedProducts.map((product) => {
            return <SliderCardProduct key={product.name} product={product} />;
          })
        }
      </section>

      <button
        className="scroller scroller-right"
        onClick={handleOnClick}
        data-testid="scroll-right-btn"
      >
        <img src={ScrollerRightImg} alt="scroll left" />
      </button>
    </section>
  );
};

Slider.propTypes = {
  displayedProducts: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ).isRequired
}

SliderCardProduct.propTypes = {
  product: PropTypes.exact({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

export default Slider;
export { SliderCardProduct };