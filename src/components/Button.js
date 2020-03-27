import React from "react";
import "../styles/Button.css";

const Button = props => {
  return (
    <div>
      <button className="operation-button" onClick={props.operation}>
        {props.value}
      </button>
    </div>
  );
};

export default Button;
