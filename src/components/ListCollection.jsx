import { useState } from "react";
import { PropTypes } from "prop-types";

const ListCollectionEntry = ({ text, onClick, isSelected }) => {
  return (
    <li className={isSelected ? "selected" : ""}>
      <button onClick={onClick}>
        <span></span>
        {text}
      </button>
    </li>
  )
}

const ListCollection = ({ textList, selectedCategory, onSelectCategory }) => {
  return (
    <>
      <ul>
        {
          textList.map((text, idx) => {
            return (
              <ListCollectionEntry
                key={text}
                text={text}
                onClick={onSelectCategory(idx)}
                isSelected={idx === selectedCategory}
              />
            )
          })
        }
      </ul>
    </>
  )
};

ListCollectionEntry.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

ListCollection.propTypes = {
  textList: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.number.isRequired,
  onSelectCategory: PropTypes.func.isRequired
};

export default ListCollection;
export { ListCollectionEntry };