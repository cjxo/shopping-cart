import { useState } from "react";
import IncreaseDecreaseInput from "../components/IncreaseDecreaseInput";

import AddToCartImg from "../assets/icons/cart-plus.svg";

import PropTypes from "prop-types";

const DisplayedProductExpanded = ({ productToExpand, onCloseExpandedProduct }) => {
  const [quantity, setQuantity] = useState(1);
  
  return (
    <>
      <section className="displayed-product-expanded">
        <button
          className="go-back-btn"
          onClick={onCloseExpandedProduct}
        >
          Go Back
        </button>
        <div className="displayed-product">
          <img src={productToExpand.url} />
          <div className="product-details">          
            <div>
              <h2>
                {productToExpand.name}
              </h2>
              <p>
                {productToExpand.description}
              </p>
            </div>

            <div>
              <h2 className="price">{productToExpand.price}</h2>
              <div className="add-to-shopping-cart-interface">
                <IncreaseDecreaseInput number={quantity} setNumber={setQuantity} />
                <button className="add-to-cart-btn">
                  <span>Add To Cart</span>
                  <img src={AddToCartImg} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

DisplayedProductExpanded.propTypes = {
  productToExpand: PropTypes.exact({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  onCloseExpandedProduct: PropTypes.func.isRequired
}

export default DisplayedProductExpanded;