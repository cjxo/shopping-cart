import { useOutletContext } from "react-router-dom";

const ShoppingCart = () => {
  const [,,,cart] = useOutletContext();
  return (
    <>
      <section className="shopping-cart-wrapper">
        <h1>Shopping Cart</h1>
        <input />
        <div className="cart-contents">

        </div>
      </section>
    </>
  )
};

export default ShoppingCart;