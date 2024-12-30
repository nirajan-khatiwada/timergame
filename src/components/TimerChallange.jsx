import React, { useState, useRef } from "react";
import Result from "./Result";

const TimerChallange = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      dialog.current.open();
      setTimeRemaining(0);
      setTimerStarted(false);
    }, targetTime * 1000);

    setTimeRemaining(targetTime * 1000);
  }

  const handleStop = () => {
    clearTimeout(timer.current);
    dialog.current.open();
    setTimerStarted(false);
  };

  return (
    <>
      <Result 
        targetTime={targetTime} 
        remainingTime={timeRemaining} 
        ref={dialog}
      />
      <section className="challange">
        <h2>{title}</h2>
        <p className="challange-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
};

export default TimerChallange;
