import React from "react";
import Button from "./Button";
import Number from "./Number";
import "../styles/Counter.css";

const Counter = props => {
  return (
    <div className="buttons-container">
      <Number number={props.number} />
      <div className="buttons-inner-container">
        <Button value="+1" operation={props.addNumber} />
        <Button value="reset" operation={props.resetToDefault} />
        <Button value="Low to 0" operation={props.lowToZero} />
      </div>
    </div>
  );
};

export default Counter;
