import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
         onAuthStateChanged, 
         signOut,
} from 'firebase/auth';
import {auth} from './firebase-config'
import Input from "./components/Input";
import Timer from "./components/Timer";
import Stats from "./components/Stats";
import { Accessibility } from "accessibility/src/main";
import Popup from "./components/Popup/Popup";
window.addEventListener(
  "load",
  function () {
    new Accessibility();
  },
  false
);
const totalTime = 60;
function App() {
  const [time, setTime] = useState(totalTime);
  const [startTimer, setStartTimer] = useState(false);
  const [stats, setStats] = useState([]);
  const [modalIsOpen, modalToggle] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [Login, setLogin] = useState([]);
  const [loginTemp, setLoginTemp] = useState([]);
  const [isShowRegister, setIsShowRegister] = useState(false);
  const [Register, setRegister] = useState([]);
  const [registerTemp, setRegisterTemp] = useState([]);

  /*
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
*/


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

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = async () => {
    try {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user)
      } catch (error) {
        console.log(error.message);
      }
  };

  const logout = async () => {
    await signOut(auth);
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
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
            </label>
            <br />
            <label className="password">
              <input type="password" 
              placeholder="password" 
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
              />
            </label>

            <button onClick={login} type="submit" className="button-23">
              login
            </button>
          </form>
        </Popup>
        <div className="outer-Register">
          <button className="button-23" onClick={() => setIsShowRegister(true)}>
            {" "}
            register
          </button>
        </div>
        <Popup Trigger={isShowRegister} setTrigger={setIsShowRegister}>
          <form onSubmit={handleSubmit} className="registerForm">
            <label className="username">
              <input
                type="text"
                placeholder="username"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
            </label>
            <br />
            <label className="password">
              <input type="password" 
              placeholder="password" 
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
              />
            </label>
            <button onClick={register} type="submit" className="button-23">
              register
            </button>
          </form>
        </Popup>

        <h4> User Logged In: </h4>
        
        <button onClick={logout} type="submit" className="button-23">
              Sign out
            </button>
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
