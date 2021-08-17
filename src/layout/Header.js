import React, { useEffect, useRef, useState } from "react";

//icons
import cup from "../assets/svg/icons/trophy.svg";
import restart from "../assets/svg/icons/restart.svg";
import sandClock from "../assets/svg/icons/sand-clock.svg";

const Header = ({ pressRestart, score }) => {
  const [seconds, setSeconds] = useState(55);
  const [minutes, setMinutes] = useState(0);

  const interval = useRef(null);

  useEffect(() => {
    startCounter();
  }, []);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes(minutes + 1);
    }
  }, [seconds]);

  const startCounter = () =>
    (interval.current = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 1000));

  const stopCounter = () => clearInterval(interval.current);

  return (
    <header className="header">
      <div className="header-section time-section">
        <button onClick={() => stopCounter()}>onclick</button>
        <img src={sandClock} alt="sandClock icon" />
        <p>
          {minutes}:{seconds}
        </p>
      </div>
      <div className="header-section score-section">
        <img src={cup} alt="cup icon" />
        <p>{score}</p>
      </div>
      <button
        onClick={() => {
          pressRestart();
        }}
        className="header-section restart-section"
      >
        <img src={restart} alt="restart icon" />
        <p>Restart</p>
      </button>
    </header>
  );
};

export default Header;
