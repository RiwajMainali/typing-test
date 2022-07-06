import React from "react";

import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [btnpopup, setBtnpopup] = useState(false);
  let [data, setdata] = useState("");
  const handleChange = (event) => {
    setdata(event.target.value);
  };
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
