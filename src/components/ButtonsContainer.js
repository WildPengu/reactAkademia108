import React from "react";
import Button from "./Button";
import Number from "./Number";
import "../styles/ButtonsContainer.css";

const ButtonsContainer = props => {
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

export default ButtonsContainer;
