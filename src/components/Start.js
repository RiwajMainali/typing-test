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
            <span className="">
              {wordsString}

              <input
                className=" -z-999  align-center opacity-100 bg-blue-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                width="500"
                value={userInput}
                defaultValue={wordsString}
                onChange={(e) => setUserInput(e.target.value)}
              />
            </span>
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
