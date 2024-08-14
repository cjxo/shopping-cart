import { Link } from "react-router-dom";
import ShoppingCartImg from "../assets/icons/cart-outline.svg"

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="nav-left-side">
          <h1>Fashion Hive</h1>
          <ul className="link-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>

        <div className="nav-right-side">
          <form onSubmit={(e) => { e.preventDefault() }}>
            <input type="search" className="main-search-bar" placeholder="Search..." />
            <button type="submit" className="search"></button>
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
      </div>
    </nav>
  );
}

export default NavBar;