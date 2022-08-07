import React, { useEffect, useState, useRef } from "react";
import randomWords from "random-words";

export default function Input(props) {
  const { signalStart, setStats, time, totalTime } = props;
  const textInputRef = useRef();
  const targetWordRef = useRef();
  const [targetWords, setTargetWords] = useState(randomWords(10));
  const [targetSentence, setTargetSentence] = useState();
  const [currentTarget, setCurrentTarget] = useState(targetWords[0]);
  const [userInput, setUserInput] = useState("");
  const [wrongInput, setWrongInput] = useState(false);
  const [completedWords, setCompletedWords] = useState([]);
  const [chart, setChart] = useState([]);
  const focusInput = () => {
    textInputRef.current.focus();
  };

  useEffect(() => {
    const numOfCharsEntered = userInput.trim().length;

    if (userInput === currentTarget.substr(0, numOfCharsEntered)) {
      targetWordRef.current.textContent =
        currentTarget.substr(numOfCharsEntered);
      setWrongInput(false);
    } else {
      setWrongInput(true);
    }
  }, [userInput]);

  useEffect(() => {
    focusInput();
  }, []);
  useEffect(() => {}, []);

  const submitWord = (e) => {
    signalStart();
    if (e.key === " " || e.key === "Enter") {
      let correct = currentTarget === userInput.trim();
      setCompletedWords([
        ...completedWords,
        { word: userInput.trim(), correct },
      ]);

      let newTargetWord = targetWords[1];
      setTargetWords([...targetWords.slice(1), randomWords(1)[0]]);
      setCurrentTarget(newTargetWord);

      textInputRef.current.textContent = null;

      setUserInput("");

      e.preventDefault();
    }
  };

  const countWordsCharsAndAcc = () => {
    let totalWordsCount = completedWords.length;
    let correctWordsArr = completedWords.filter((obj) => {
      return obj.correct;
    });
    let correctWordsCount = correctWordsArr.length * (60 / totalTime);
    let characterCount = 0;
    correctWordsArr.forEach((val) => {
      characterCount += val.word.length;
    });

    let accuracyRate = correctWordsCount / totalWordsCount;
    accuracyRate = (accuracyRate * 100).toFixed(3);

    return [correctWordsCount, characterCount, accuracyRate];
  };
  useEffect(() => {
    if (time === 0) {
      setStats(countWordsCharsAndAcc());
      let newTargetWords = randomWords(10);
      setTargetWords(newTargetWords);
      setCurrentTarget(newTargetWords[0]);
      setUserInput("");
      setWrongInput(false);
      setCompletedWords([]);
      textInputRef.current.textContent = null;
    }
  }, [time]);
  return (
    <div>
      <div
        className="input-form bg-dark"
        id="tooltip-target"
        onClick={(e) => {
          focusInput();
        }}
      >
        <div className="input-field-wrapper text-white">
          <div style={{ display: "flex", float: "right", textAlign: "right" }}>
            {completedWords.slice(-10).map((val, i) => {
              return (
                <span
                  key={i}
                  className={`word ${
                    val.correct ? "completed" : "completed-wrong"
                  }`}
                >
                  {val.word}
                </span>
              );
            })}

            <div
              className={`input-field ${wrongInput ? "wrong" : "correct"}`}
              spellCheck="false"
              autoCapitalize="off"
              autoCorrect="off"
              autoComplete="off"
              contentEditable
              ref={textInputRef}
              onInput={(e) => {
                setUserInput(e.currentTarget.textContent);
              }}
              onKeyPress={submitWord}
            ></div>
          </div>
        </div>
        <div className="words-list">
          {targetWords.map((w, i) => (
            <span key={i} ref={i === 0 ? targetWordRef : null} className="word">
              {w}
            </span>
          ))}
        </div>
      </div>
      <h3 style={{ textAlign: "center" }}>{chart[0]}</h3>
    </div>
  );
}
