import { useEffect, useState } from "react";
import Gen from "./Gen";
import Timer from "./Timer";
const SECONDS = 60;

function Start() {
  useEffect(() => {}, 1000);
  var words = Gen();

  const wordswithspace = words.map((word) => word + " ");
  const testString = wordswithspace.join("");
  const [userInput, setUserInput] = useState("");
  const [time, setTime] = useState(30);
  const [startTimer, setStartTimer] = useState(false);
  const [uncorrect, setUncorrect] = useState(0);
  const [all, setAll] = useState(0);
  const startCountdown = async () => {
    for (let i = 59; i >= 0; i--) {
      await new Promise((r) => setTimeout(r, 1000));
      setTime(i);
    }
    setStartTimer(false);
  };
  const [wpm, setWpm] = useState(0.0);
  function handleWpm(wpm) {
    setWpm(wpm);
  }
  function changeWpm() {
    var totalwpm = all / 5;

    handleWpm(totalwpm);
  }
  function setred(i) {}
  function checkInput() {
    setUncorrect(0);
    //last character
    for (let i = 0; i < userInput.length; i++) {
      if (testString[i] !== userInput[i]) {
        setUncorrect(uncorrect + 1);
        setred(i);
      }
    }
  }

  return (
    <div>
      <div className="bg-blue-500">
        <button
          onClick={() => {
            setStartTimer(true);
            startCountdown();
          }}
        >
          Start
        </button>
        <Timer>{time}</Timer>
        <br></br>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"></div>
          <p className="text-gray-700 text-base">
            <span className="">
              <span>{testString}</span>
              <input
                className=" -z-999  align-center opacity-100 bg-blue-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                width="500"
                value={userInput}
                onChange={(e) => {
                  setUserInput(e.target.value);
                  checkInput();
                  setAll(e.target.value.length);
                  changeWpm();
                }}
              />
            </span>
            <br />
            {uncorrect}
            <div class="text-gray-800">WPM</div>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2"></div>
      </div>
    </div>
  );
}
export default Start;
