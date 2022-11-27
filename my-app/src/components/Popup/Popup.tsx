import React from "react";
import "../../assets/css/components/popup/popup.css";
import parabens from "../../assets/img/feliz.png";

function Popup(props: any) {
  // if (props.trigger) {
  //  setTimeout(() => {
  //    props.setTrigger(false);
  //   }, 3000);
  // }
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        {props.children}
        <img className="dimensao-img" src={parabens} alt="" />
      </div>
    </div>
  ) : null;
}

export default Popup;
