import React from "react";

const NumberButton = (props) => {
  console.log("NumberButton", props);
  return (
    <>
      <button
      className="number-button"
      onClick={() => props.addNumber(props.text)}
    >
          {props.text}
          
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;