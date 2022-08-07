import React, { useEffect, useState } from "react";

import Input from "./components/Input";
import Timer from "./components/Timer";
import Stats from "./components/Stats";
import { Accessibility } from "accessibility/src/main";
import Popup from "./components/Popup/Popup";
import Chart from "./components/Chart";
import Login from "./components/Account/Login";
import Dashboard from "./components/Account/Dashboard";
import Register from "./components/Account/Register";
import Reset from "./components/Account/Reset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
window.addEventListener(
  "load",
  function () {
    new Accessibility();
  },
  false
);

function App() {
  const [totalTime, setTotalTime] = useState(60);
  const [time, setTime] = useState(totalTime);
  const [startTimer, setStartTimer] = useState(false);
  const [stats, setStats] = useState([]);
  const [modalIsOpen, modalToggle] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(false);

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

  const setInitialTime30 = (time) => {
    setTotalTime(30);
    setTime(30);
  };
  const setInitialTime15 = (time) => {
    setTotalTime(15);
    setTime(15);
  };
  const setInitialTime60 = (time) => {
    setTotalTime(60);
    setTime(60);
  };
  return (
    <>
      <div className="mainDiv">
        <div className="outer-Login">
          <button
            className="button-23"
            onClick={() => setIsShowLogin(true)}
            alt="login popup button"
          >
            Account
          </button>
        </div>
        <Popup Trigger={isShowLogin} setTrigger={setIsShowLogin}></Popup>
        <button 
        className="button-24"
        onClick={setInitialTime60}>
          60
          </button>
         <div></div> 
        <button 
        className="button-24"
        onClick={setInitialTime30}>30
        </button>
        <div></div>
        <button 
        className="button-24"
        onClick={setInitialTime15}>15
        </button>
        <h2 style={{ textAlign: "center" }}>Test your typing skills </h2>
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
          totalTime={totalTime}
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
