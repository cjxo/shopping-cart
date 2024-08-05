import { Link } from "react-router-dom";
import ShoppingCartImg from "../assets/icons/cart-outline.svg"

const NavBar = () => {
  return (
    <nav>
      <div className="nav-left-side">
        <h1>Fashion Hive</h1>
        <ul className="link-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>

      <div className="nav-right-side">
        <form>
          <input type="search" placeholder="Search..." />
          <button type="submit"></button>
        </form>
        <ul className="link-list">
          <li>
            <Link to="/shopping-cart">
              <img 
                src={ShoppingCartImg}
                alt="shopping cart image"
                width="32px"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;