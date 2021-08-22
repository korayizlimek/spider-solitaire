import React, { useEffect, useRef, useState } from "react";

//icons
import cupIcon from "../assets/svg/icons/trophy.svg";
import restartIcon from "../assets/svg/icons/restart.svg";
import sandClockIcon from "../assets/svg/icons/sand-clock.svg";

const Header = ({ restart, pressRestart, score, gameOver }) => {
  const [seconds, setSeconds] = useState(55);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (gameOver === true) {
      stopCounter();
    } else {
      startCounter();
      setSeconds(0);
      setMinutes(0);
    }
  }, [gameOver]);

  useEffect(() => {
    stopCounter();
    startCounter();
    setSeconds(0);
    setMinutes(0);
  }, [restart]);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes(minutes + 1);
    }
  }, [seconds]);

  const interval = useRef(null);

  const stopCounter = () => clearInterval(interval.current);

  const startCounter = () =>
    (interval.current = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 1000));

  const time = (time) => (time > 10 ? time : `0${time}`);

  return (
    <header className="header">
      <div className="header-section time-section">
        <img src={sandClockIcon} alt="sandClock icon" />
        <p>
          {time(minutes)}:{time(seconds)}
        </p>
      </div>
      <div className="header-section score-section">
        <img src={cupIcon} alt="cup icon" />
        <p>{score}</p>
      </div>
      <button
        onClick={() => {
          pressRestart();
        }}
        className="header-section restart-section"
      >
        <img src={restartIcon} alt="restart icon" />
        <p>Restart</p>
      </button>
    </header>
  );
};

export default Header;
