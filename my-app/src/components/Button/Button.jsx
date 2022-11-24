import React, { useState } from "react";
import "../../assets/css/components/button.css";

const UIButton = (props) => {
  const [buttonColor, setButtonColor] = useState(false);

  function handleClick(color) {
    setButtonColor(!buttonColor);
  }

  return (
    <div className="flex">
      <button
        style={{ color: buttonColor }}
        onClick={handleClick}
        className={buttonColor === true ? "ui-button-green" : "ui-button "}
      >
        <img className="dimensao-img" src={props.image} alt="" />
        {props.children}
      </button>
    </div>
  );
};

export default UIButton;
