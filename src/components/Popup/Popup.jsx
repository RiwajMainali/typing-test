import React from "react";
import "./Popup.css";
export default function Popup(props) {
  return props.Trigger ? (
    <>
      <div className="Popup">
        <div className="Popup-inner">
          <h1>Login</h1>
          <button
            className="button-23  close-btn"
            onClick={() => props.setTrigger(false)}
          >
            Close
          </button>
          {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
