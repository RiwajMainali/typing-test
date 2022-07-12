import React, { useEffect } from "react";

import Login from "./components/Login";
import random_words from "random-words";
import { useState } from "react";

function App() {
  function randomwords() {
    return new Array(400).fill(null).map(() => random_words());
  }
  const [words, setWords] = useState([]);
  useEffect(() => {
    setWords(randomwords());
  }, []);
  const [btnPopup, setbtnPopup] = useState(false);
  let [loginData, setLoginData] = useState("");

  const loginChange = (event) => {
    setLoginData(event.target.value);
  };
  return (
    <div className="App ">
      <div className="login">
        <main>
          <div className=" pl-1  bg-blue-500  absolute  left-1/2 transform -translate-x-1/2">
            <button onClick={() => setbtnPopup(true)}>Login/Register</button>
            <Login trigger={btnPopup} setTrigger={setbtnPopup}>
              <h2>login</h2>
              <form>
                <label>
                  username:&nbsp;&nbsp;
                  <input
                    className="bg-blue-200 flex"
                    type="text"
                    value={loginData}
                    onChange={loginChange}
                    placeholder="Enter Username"
                  />
                </label>
              </form>
            </Login>
          </div>
          <div className="p-5 card bg-blue-200 ">
            {words.map((words, i) => (
              <>
                <span> </span>
                <span>{words}</span>
              </>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
