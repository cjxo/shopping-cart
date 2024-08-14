import IncreaseDecreaseInput from "../components/IncreaseDecreaseInput";

import AddToCartImg from "../assets/icons/cart-plus.svg";
import RemoveFromCartImg from "../assets/icons/cart-minus.svg";

import PropTypes from "prop-types";
import { useState } from "react";

const DisplayedProductExpanded = ({ addToCart, removeFromCart, wasAddedToCart, productToExpand, onCloseExpandedProduct }) => {
  const [productQty, setProductQty] = useState(1);
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
                <IncreaseDecreaseInput number={productQty} setNumber={setProductQty} />
                {
                  (wasAddedToCart) ? (
                    <button
                      className="add-to-cart-btn"
                      onClick={removeFromCart}
                      style={{
                        backgroundColor: "hsl(120, 51%, 54%)",
                      }}
                    >
                      <span>Remove From Cart</span>
                      <img src={RemoveFromCartImg} />
                    </button>        
                  ) : (
                    <button
                      className="add-to-cart-btn"
                      onClick={addToCart(productQty)}
                    >
                      <span>Add To Cart</span>
                      <img src={AddToCartImg} />
                    </button>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

DisplayedProductExpanded.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  wasAddedToCart: PropTypes.bool.isRequired,
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