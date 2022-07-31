import React, { useEffect, useState } from "react";

import Input from "./components/Input";
import Timer from "./components/Timer";
import Stats from "./components/Stats";

import Popup from "./components/Popup/Popup";

const totalTime = 60;
function App() {
  const [time, setTime] = useState(totalTime);
  const [startTimer, setStartTimer] = useState(false);
  const [stats, setStats] = useState([]);
  const [modalIsOpen, modalToggle] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [Login, setLogin] = useState([]);
  const [loginTemp, setLoginTemp] = useState([]);
  const startCountdown = async () => {
    for (let i = totalTime - 1; i >= 0; i--) {
      await new Promise((r) => setTimeout(r, 1000));
      setTime(i);
    }
    setStartTimer(false);
  };

  useEffect(() => {
    if (time === 0) {
      modalToggle(true);

      setTime(totalTime);
    }
  }, [time]);

  useEffect(() => {
    if (stats !== []) {
      const wpm = stats[0];
    }
  }, [stats]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mainDiv">
        <div className="outer-Login">
          <button className="button-23" onClick={() => setIsShowLogin(true)}>
            {" "}
            login
          </button>
        </div>
        <Popup Trigger={isShowLogin} setTrigger={setIsShowLogin}>
          <form onSubmit={handleSubmit} className="loginForm">
            <label className="username">
              <input
                type="text"
                placeholder="username"
                onChange={setLoginTemp}
              />
            </label>
            <br />
            <label className="password">
              <input type="password" placeholder="password" />
            </label>

            <button type="submit" className="button-23">
              login
            </button>
          </form>
        </Popup>
        <h2 style={{ textAlign: "center" }}>Test your typing skills :)</h2>
        <Timer>{time}</Timer>
        <Input
          signalStart={() => {
            if (!startTimer) {
              setStartTimer(true);
              startCountdown();
            }
          }}
          time={time}
          setStats={setStats}
        />
        <h3 style={{ textAlign: "center" }}>
          Click in the box and start typing!
        </h3>
        <Stats
          isOpen={modalIsOpen}
          toggle={async () => {
            modalToggle(false);
          }}
          stats={stats}
        />
      </div>
    </>
  );
}

export default App;
