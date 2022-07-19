import { useEffect, useState } from "react";
import Gen from "./Gen";

const SECONDS = 60;

function Start() {
  var words = Gen();
  const wordswithspace = words.map((word) => word + " ");
  const wordsString = wordswithspace.join("");
  const [userInput, setUserInput] = useState("");
  const [correct, setCorrect] = useState(0);
  const [time, setTime] = useState(SECONDS);
  const [wpm, setWpm] = useState(0.0);
  function handleWpm(wpm) {
    setWpm(wpm);
  }
  function changeWpm(total) {
    var result = correct / time;
    handleWpm(result);
  }

  return (
    <div>
      <div className="max-w-  lg rounded overflow-hidden shadow-lg bg-blue-500">
        <br></br>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"></div>
          <p className="text-gray-700 text-base">
            <input
              className="-z-999 absolute align-center bg-blue-500"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <span>{wordsString}</span>
            <br />
            {console.log(userInput)}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2"></div>
      </div>
    </div>
  );
}
export default Start;
