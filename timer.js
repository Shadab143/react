import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  const restart = () => {
    setSeconds(0);
    setMinutes(0);
  };
  const stop = () => {
    clearInterval(timer);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
      <button onClick={restart}>restart</button>
      <button onClick={stop}>stop</button>
    </div>
  );
}
