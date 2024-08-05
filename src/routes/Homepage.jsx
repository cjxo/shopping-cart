import Slider from "../components/Slider";

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

const Homepage = () => {
    return (
      <section className="homepage-wrapper">
        <h1 className="homepage-header">Welcome to Fashion Hive</h1>
        <Slider displayedProducts={testProducts} />
        <h2>Featured Items</h2>
      </section>
    );
  }
  
  export default Homepage;