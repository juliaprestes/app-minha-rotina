import React, { useEffect } from "react";
import "../../assets/css/components/popup/popup.css";

function Popup(props: any) {
  if (props.trigger) {
    setTimeout(() => {
      props.setTrigger(false);
    }, 3000);
  }
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : null;
}

export default Popup;
