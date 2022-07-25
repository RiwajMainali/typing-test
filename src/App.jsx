import React, { useEffect, useState } from "react";
import { Navbar, NavItem, NavLink, NavbarBrand, Nav } from "reactstrap";
import Input from "./components/Input";
import Timer from "./components/Timer";
import Stats from "./components/Stats";

const totalTime = 60;
function App() {
  const [time, setTime] = useState(totalTime);
  const [startTimer, setStartTimer] = useState(false);
  const [stats, setStats] = useState([]);
  const [modalIsOpen, modalToggle] = useState(false);

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

  return (
    <>
      <Navbar>
        <NavbarBrand></NavbarBrand>
        <Nav className="mr-2ex" navbar>
          <NavItem>
            <NavLink
              href="https://github.com/RiwajMainali/typing-test"
              target="_blank"
            >
              <div className="link">Github</div>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>

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
      <Stats
        isOpen={modalIsOpen}
        toggle={async () => {
          modalToggle(false);
        }}
        stats={stats}
      />
    </>
  );
}

export default App;
