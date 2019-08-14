import React from "react";

// const zeroButton = (props) => {
//     if (props.text === "0") {
//       return document.querySelectorAll("button").classList.add("zeroButton");  
//      }
//      else {return props.text}
// }
const NumberButton = (props) => {
  // console.log("NumberButton", props);

  return (
    <>
      <button className="number-button"
      
      onClick={() => props.addNumber(props.text)}
    >
          {props.text}
          {/* {zeroButton()} */}
          
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;