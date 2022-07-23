import { useState, useEffect, useRef } from "react";
import randomWords from "random-words";

import "../index.css";
const NUMB_OF_WORDS = 300;

function Gen() {
  const [words, setWords] = useState([]);
  const generate = () => {
    return new Array(NUMB_OF_WORDS).fill(null).map(() => randomWords());
  };
  useEffect(() => {
    setWords(generate());
  }, []);
  return words;
}
export default Gen;
