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

const ListCollection = () => {
  const [currentSelected, setCurrentSelected] = useState(0);
  const entryTexts = ["All", "Clothing", "Jewelery", "Shoes"];

  const onClick = (idx) => {
    return () => {
      setCurrentSelected(idx);
    }
  };

  return (
    <>
      <ul>
        {
          entryTexts.map((text, idx) => {
            return (
              <ListCollectionEntry
                key={text}
                text={text}
                onClick={onClick(idx)}
                isSelected={idx === currentSelected}
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

export default ListCollection;
export { ListCollectionEntry };