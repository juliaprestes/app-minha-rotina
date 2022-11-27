import React from "react";
import "../../assets/css/components/popup/popup.css";
import parabens from "../../assets/img/feliz.png";

function Popup(props: any) {
  if (props.trigger) {
    setTimeout(() => {
      props.setTrigger(false);
    }, 3000);
  }
  return props.trigger ? (
    <div className="popup ">
      <div className="popup-inner text-white">
        <button
          className="close-btn text-white"
          onClick={() => props.setTrigger(false)}
        >
          x
        </button>
        <div className="flex flex-row align-center text-center gap flex-center">
          <div className="descricao">{props.children}</div>
          <div>
            <img className="dimensao-img" src={parabens} alt="" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup;
