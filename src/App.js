import React from "react";
import Modals from "./components/Modal";
import Login from "./components/Login";
import RandomWords from "random-words";

import { useState } from "react";
function returnsRandomWords(x) {
  return RandomWords(x);
}
function App() {
  const [btnpopup, setBtnpopup] = useState(false);
  let [data, setdata] = useState("");
  var x = 0;
  const [words, setWords] = useState(returnsRandomWords(x));

  const handleChange = (event) => {
    setdata(event.target.value);
  };
  return (
    <div class="App">
      <div class="login">
        <main>
          <div class="pl-1 bg-green-500">
            <button class=" " onClick={() => setBtnpopup(true)}>
              Login/Register
            </button>
            <Login trigger={btnpopup} setTrigger={setBtnpopup}>
              <h2>login</h2>
              <form>
                <label>
                  username:
                  <input
                    className="bg-blue-200"
                    type="text"
                    value={data}
                    onChange={handleChange}
                    placeholder="Enter Username"
                  />
                </label>
              </form>
            </Login>
          </div>
        </main>
        <div class="typeracer p-1 border">
          <Modals Title="title" body="body" />
        </div>
      </div>
    </div>
  );
}

export default App;
