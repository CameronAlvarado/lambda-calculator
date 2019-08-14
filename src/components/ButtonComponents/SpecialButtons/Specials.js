import React, { useState } from "react";
//import any components needed
import SpecialButton from "./SpecialButton"
//Import your array data to from the provided data file
import { specials } from '../../../data';
import { tsPropertySignature } from "@babel/types";

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specState, setspecState] = useState(specials);
  console.log(useState);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specState.map( (special) => {
        return <SpecialButton text={special} addSpecial={props.addSpecial}/>
      })}
    </div>
  );
};
export default Specials;
