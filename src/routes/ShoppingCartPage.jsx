import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import IncreaseDecreaseInput from "../components/IncreaseDecreaseInput";
import { useState } from "react";

const CartEntryCard = ({ cart, cartEntry }) => {
  const { product, quantity } = cartEntry;

  const setQuantity = (n) => {
    cart.setQty(product, n);
  };

  const removeEntry = () => {
    cart.remove(product);
  };

  return (
    <div className="cart-entry">
      <button
          type="button"
          onClick={removeEntry}
        >
          Remove
      </button>
      
      <div className="img-wrapper">
        <img src={product.url} alt={product.name} />
      </div>
      <div className="cart-quick-view">
        <div className="cart-product">
          <h3>{product.name}</h3>
          <h4>{product.type}</h4>
        </div>
        <IncreaseDecreaseInput
          number={quantity}
          setNumber={setQuantity}
        />
      </div>
      <div className="cart-price-display">
        <h3>
          {product.price}
        </h3>
      </div>
    </div>
  );
};

const ShoppingCart = () => {
  const [searchVal, setSearchVal] = useState("");
  const [,,,cart] = useOutletContext();
  console.log(cart.state());

  const filteredProducts = cart.state().filter((entry) => {
    return entry.product.name.toLowerCase().includes(searchVal.toLowerCase());
  });

  const onSearch = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <>
      <section className="shopping-cart-wrapper">
        <header>
          <h1>Shopping Cart</h1>

          <input
            type="search"
            placeholder="Search For Product in Cart"
            className="cart-search-product"
            value={searchVal}
            onInput={onSearch}
          />
        </header>

        <div className="cart-contents">
          {
            filteredProducts.map((entry, idx) => {
              return (
                <CartEntryCard
                  key={entry.product.name + `${idx}`}
                  cart={cart}
                  cartEntry={entry}
                />
              );
            })
          }
        </div>
        <div className="subtotal">
          <div>
            <div>
              <h4>Sub-Total</h4>
              <p>{cart.state().length} {cart.state().length > 1 ? " items" : " item"}</p>
            </div>
            <h3>
              {
                `
                $${cart.state().reduce(
                  (acc, curr) => {
                    console.log(curr);
                    return acc + parseFloat(curr.product.price.substring(1))
                  }, 0)}`
              }
            </h3>
          </div>
          <button
            type="button"
          >
            Proceed To Checkout
          </button>
        </div>
      </section>
    </>
  );
};

CartEntryCard.propTypes = {
  
};

export default ShoppingCart;