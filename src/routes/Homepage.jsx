import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";

import RightArrowImg from "../assets/icons/arrow-right-thin.svg";
import PropTypes from 'prop-types';
import { Link, useOutletContext } from "react-router-dom";

const testProducts = [
  {
    type: "Loading",
    name: "Loading0",
    price: "$7.95"
  },
  {
    type: "Loading",
    name: "Loading1",
    price: "$7.95"
  },
  {
    type: "Loading",
    name: "Loading2",
    price: "$7.95"
  },
  {
    type: "Loading",
    name: "Loading3",
    price: "$7.95"
  },
  {
    type: "Loading",
    name: "Loading4",
    price: "$7.95"
  },
  {
    type: "Loading",
    name: "Loading5",
    price: "$7.95"
  },
  {
    type: "Loading",
    name: "Loading6",
    price: "$7.95"
  },
  {
    type: "Loading",
    name: "Loading7",
    price: "$7.95"
  },
];

const HomepageHeader = () => {
  return (
    <header className="welcome-page">
      { /* TODO: a background picture instead of colour peachpuff */ }
      <div className="welcome-page-wrapper">
        <h1>Welcome to <span>Fashion Hive</span></h1>

        <p>
          Discover an array of men&apos;s and women&apos;s 
          fashion that caters to every taste and trend. 
          From fashionable casual wear to sophisticated evening attire, 
          our pieces are crafted to meet the highest standards of 
          quality and elegance.
        </p>

        <Link to="/shop" className="explore-now">
          Explore Now
          <img src={RightArrowImg} alt="arrow pointing right" />
        </Link>
      </div>

      {/*<div className="image-placeholder">TODO: Actual Image</div>*/}
    </header>
  )
};

const SpecialOffers = ({ specialOffers }) => {
  return (
    <>
      <h1 className="homepage-header">
        Check out today&apos;s <span>Special Offers</span>
      </h1>
      <Slider displayedProducts={specialOffers} />
    </>
  )
}

const SubscribeForm = () => {
  return (
    <>
    </>
  );
}

const Homepage = () => {
  const displayedProducts = [];
  const [clothing, , shoes] = useOutletContext();
  
  {
    const c = [...clothing];
    const s = [...shoes];
    for (let i = 0; (i < 8) && (c.length || s.length); ++i) {
      if ((Math.random() < 0.5) && c.length) {
        const randIdx = Math.floor(Math.random() * c.length);
        displayedProducts.push(c.splice(randIdx, 1)[0]);
      } else if (s.length) {
        const randIdx = Math.floor(Math.random() * s.length);
        displayedProducts.push(s.splice(randIdx, 1)[0]);
      }
    }
  }

  return (
    <section className="homepage-wrapper">
      <HomepageHeader />
      <SpecialOffers specialOffers={displayedProducts.length ? displayedProducts : testProducts} />
      <Testimonials />
      <SubscribeForm />
    </section>
  );
}

SpecialOffers.propTypes = {
  specialOffers: PropTypes.arrayOf(PropTypes.exact({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default Homepage;