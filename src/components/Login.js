import React from "react";
import "../index.css";
function Login(props) {
  return props.trigger ? (
    <div class="bg-blue-600 p-1">
      <div className="popup">
        <div className="popup-inner">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => props.setTrigger(false)}
          >
            Close
          </button>
          {props.children}{" "}
        </div>
      </div>
    </div>
  ) : null;
}

export default Login;
