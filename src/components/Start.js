import { useState, useEffect } from "react";
import random_words from "random-words";
import "../index.css";
function Start(props) {
  function randomwords() {
    return new Array(400).fill(null).map(() => random_words());
  }
  const [words, setWords] = useState([]);
  useEffect(() => {
    setWords(randomwords());
  }, []);
  return props.trigger ? (
    <div>
      <div className="py-2 px-5 flex-2 bg-blue-200 ">
        {words.map((words, i) => (
          <>
            <span> </span>
            <span className="text-xl">{words}</span>
          </>
        ))}
      </div>
    </div>
  ) : null;
}

export default Start;
