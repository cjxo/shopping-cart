import { useOutletContext } from "react-router-dom";
import { useState } from "react";

import PropTypes from "prop-types";

import ListCollection from "../components/ListCollection";

import AddToCartImg from "../assets/icons/cart-plus.svg";
import RemoveToCartImg from "../assets/icons/cart-minus.svg";

import IncreaseDecreaseInput from "../components/IncreaseDecreaseInput";

const QuickViewCard = ({ name, price, imgUrl, onProductExpandToggle }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  
  const onAddToCart = () => {
    setAddedToCart(!addedToCart);
  };

  return (
    <div className="quick-view-card">
      <button
        onClick={onProductExpandToggle}
      >
        <img src={imgUrl} className="product-img" />
      </button>
      <div className="card-interactable">
        <div className="name-and-price">
          <button
            onClick={onProductExpandToggle}
          >
            <h3>{name}</h3>
          </button>
          <p>{price}</p>
        </div>
        <button
          className={addedToCart ? "added" : ""}
          onClick={onAddToCart}
        >
          <img
            src={addedToCart ? RemoveToCartImg : AddToCartImg}
            alt="add to cart icon"
          />
        </button>
        
      </div>
    </div>
  )
};

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

const ShopPage = () => {
  const [clothing, jewelery, shoes] = useOutletContext();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [productToExpand, setProductToExpand] = useState(null);
  const entryTexts = ["All", "Clothing", "Jewelery", "Shoes"];
  
  const onSelectCategory = (idx) => {
    return () => {
      setSelectedCategory(idx);
    };
  };

  const onProductExpandToggle = (productToExpand) => {
    return () => {
      setProductToExpand(productToExpand);
    };
  };

  const onCloseExpandedProduct = () => {
    setProductToExpand(null);
  };

  const quickViewCardMapper = (array) => {
    return array.map(item => {
      return (
        <QuickViewCard
          key={item.name}
          name={item.name}
          price={item.price}
          imgUrl={item.url}
          onProductExpandToggle={onProductExpandToggle(item)}
        />
      )
    });
  };

  return (
    <>
      <section className="shoppage-wrapper">
        <h1>Shop</h1>
        <section className="shoppage-main">
          <section>
            <h2>Collection</h2>
            <ListCollection
              textList={entryTexts}
              selectedCategory={selectedCategory}
              onSelectCategory={onSelectCategory}
            />
          </section>

          {
            (productToExpand === null) ? (
              <section className="displayed-items">
              {
                (selectedCategory === 0) ? (
                  quickViewCardMapper([...clothing, ...jewelery, ...shoes])
                ) : (selectedCategory === 1) ? (
                  quickViewCardMapper(clothing)
                ) : (selectedCategory === 2) ? (
                  quickViewCardMapper(jewelery)
                ) : (
                  quickViewCardMapper(shoes)
                )
              }
              </section>
            ) : (
              <DisplayedProductExpanded
                productToExpand={productToExpand}
                onCloseExpandedProduct={onCloseExpandedProduct}
              />
            )
          }
        </section>
      </section>
    </>
  );
}

QuickViewCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  onProductExpandToggle: PropTypes.func.isRequired
}

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

export default ShopPage;