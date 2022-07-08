import React from "react";
import "../index.css";
function Login(props) {
  return props.trigger ? (
    <div
      className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-300
      ease-in-out"
    >
      <div className="">
        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => props.setTrigger(false)}
          >
            Close
          </button>

          {props.children}
          {""}
        </div>
      </div>
    </div>
  ) : null;
}

export default Login;
