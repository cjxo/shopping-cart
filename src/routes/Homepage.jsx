import Slider from "../components/Slider";
import RightArrowImg from "../assets/icons/arrow-right-thin.svg";
import PropTypes from 'prop-types';

const testProducts = [
  {
    type: "Soap",
    name: "Mint Mild Liquid Soap0",
    price: "$7.95"
  },
  {
    type: "Soap",
    name: "Mint Mild Liquid Soap1",
    price: "$7.95",
  },
  {
    type: "Soap",
    name: "Mint Mild Liquid Soap2",
    price: "$7.95"
  },
  {
    type: "Soap",
    name: "Mint Mild Liquid Soap3",
    price: "$7.95"
  },
  {
    type: "Soap",
    name: "Mint Mild Liquid Soap4",
    price: "$7.95"
  },
  {
    type: "Soap",
    name: "Mint Mild Liquid Soap5",
    price: "$7.95"
  },
  {
    type: "Soap",
    name: "Mint Mild Liquid Soap6",
    price: "$7.95"
  },
  {
    type: "Soap",
    name: "Mint Mild Liquid Soap7",
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

        <button type="button">
          Explore Now
          <img src={RightArrowImg} alt="arrow pointing right" />
        </button>
      </div>

      <div className="image-placeholder">TODO: Actual Image</div>
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

const Testimonials = () => {
  return (
    <>
    </>
  );
}

const SubscribeForm = () => {
  return (
    <>
    </>
  );
}

const Homepage = () => {
  return (
    <section className="homepage-wrapper">
      <HomepageHeader />
      <SpecialOffers specialOffers={testProducts} />
      <Testimonials />
      <SubscribeForm />
    </section>
  );
}

SpecialOffers.propTypes = {
  specialOffers: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ).isRequired
};


export default Homepage;