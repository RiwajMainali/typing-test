import { useState, useEffect, useRef } from "react";
import Start from "./components/Start";
import Login from "./components/Login";

function App() {
  const [btnPopup, setBtnPopup] = useState(false);
  const [start, setStart] = useState(false);
  let [loginData, setLoginData] = useState("");

  const loginChange = (event) => {
    setLoginData(event.target.value);
  };
  const starts = <button onClick={() => setStart(true)}>Start </button>;

  return (
    <div className="bg-gray-200">
      <div
        className={"bg-blue-400 opacity-100 w-screen h-screen ${btnPopup? }"}
      >
        <div className="App">
          <div className="login">
            <main>
              <div className="flex-1 bg-blue-500 px-2 absolute  left-1/2 transform -translate-x-1/2">
                <button
                  onClick={() => {
                    setBtnPopup(true);
                  }}
                >
                  Login/Register
                </button>
                <Login className="" trigger={btnPopup} setTrigger={setBtnPopup}>
                  <h2>login</h2>
                  <form>
                    <label>
                      username:&nbsp;&nbsp;
                      <input
                        className="bg-blue-200 mx-auto flex text-black"
                        type="text"
                        value={loginData}
                        onChange={loginChange}
                        placeholder="Enter Username"
                      />
                    </label>
                  </form>
                </Login>
              </div>
              <br></br>
            </main>
          </div>
        </div>
        <Start trigger={true} setTrigger={true}></Start>
      </div>
    </div>
  );
}

export default App;
