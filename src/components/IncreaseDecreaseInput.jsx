import PropTypes from "prop-types";

import MinusImg from "../assets/icons/minus.svg";
import PlusImg from "../assets/icons/plus.svg";

const IncreaseDecreaseInput = ({ number, setNumber }) => {
  const decrement = () => {
    if (number > 1) {
      setNumber(n => n - 1);
    }  
  };

  const increment = () => {
    setNumber(n => n + 1);
  };

  const onInput = (e) => {
    setNumber(parseInt(e.target.value));
  }

  const onFocusLost = (e) => {
    console.log(e.target.value)
    if ((number < 1) || (e.target.value.length === 0)) {
      setNumber(1);
    }
  }

  return (
    <div className="increase-decrease-container">
      <button
        className="decrease"
        onClick={decrement}
      >
        <img src={MinusImg} />
      </button>
      <input
        type="number"
        value={number}
        onInput={onInput}
        onBlur={onFocusLost}
      />
      <button
        className="increase"
        onClick={increment}
      >
        <img src={PlusImg} />
      </button>
    </div>
  );
};

IncreaseDecreaseInput.propTypes = {
  number: PropTypes.number.isRequired,
  setNumber: PropTypes.func.isRequired
};

export default IncreaseDecreaseInput;