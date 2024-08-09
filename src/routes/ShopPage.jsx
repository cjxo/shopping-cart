import { useOutletContext } from "react-router-dom";
import ListCollection from "../components/ListCollection";

const ShopPage = () => {
  const [clothing, jewelery, shoes] = useOutletContext();
  return (
    <>
      <section className="shoppage-wrapper">
        <h1>Shop</h1>
        <section className="shoppage-main">
          <section>
            <h2>Collection</h2>
            <ListCollection />
          </section>

          <section className="displayed-items">
            hi
          </section>
        </section>
      </section>
    </>
  );
}

export default ShopPage;