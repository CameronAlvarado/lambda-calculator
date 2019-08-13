import React from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import Operators from "../ButtonComponents/OperatorButtons/Operators";
import Specials from "../ButtonComponents/SpecialButtons/Specials";

const Display = () => {
  return <div className = "display">{/* Display any props data here */}
      <Numbers />
      <Operators />
      <Specials />
  </div>;
};

export default Display;
