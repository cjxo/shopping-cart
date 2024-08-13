import { useOutletContext } from "react-router-dom";
import { useState } from "react";

import ListCollection from "../components/ListCollection";
import QuickViewCard from "../components/QuickViewCard";
import DisplayedProductExpanded from "../components/DisplayedProductExpanded";

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

export default ShopPage;