import React, { useState, useRef, useEffect, useContext } from "react";

import { RadioContext } from "../../context/radioContext";

import "./Timer.css";

// icons
import clock from "../../assets/icons/clock-regular.svg";
import times from "../../assets/icons/times.svg";

const Timer = ({ style, closeTimerSettings, hideTimer }) => {
  const counterRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const {
    playMusic,
    setPlayMusic,
    timer,
    setTimer,
    setTimerAction,
  } = useContext(RadioContext);

  const [checked, setChecked] = useState("Прекини звук");

  useEffect(() => {
    if (!playMusic) {
      setIsActive(false);
      clearInterval(counterRef.current);
    } else {
      setIsActive(true);
      startCountdown();
    }

    // eslint-disable-next-line
  }, [playMusic]);

  useEffect(() => {
    if (timer.seconds < 1 && timer.minutes < 1 && playMusic) {
      if (checked === "Прекини звук") {
        clearInterval(counterRef.current);
        setPlayMusic(false);
      } else {
        clearInterval(counterRef.current);
        setTimerAction(checked);
      }
    } else if (timer.seconds < 0 && timer.minutes > 0 && playMusic) {
      const newValues = {
        minutes: timer.minutes - 1,
        seconds: 59,
      };

      setTimer(newValues);
    }

    // eslint-disable-next-line
  }, [timer.minutes, timer.seconds, playMusic]);

  const startCountdown = () => {
    counterRef.current = setInterval(() => {
      setTimer((prevState) => {
        const newState = {
          minutes: prevState.minutes,
          seconds: prevState.seconds - 1,
        };

        setTimer(newState);

        return newState;
      });
    }, 1000);
  };

  const formatTime = (time) => {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  };

  return (
    <div className="Timer" style={style}>
      <div className="timer-icons">
        <img src={clock} alt="clock-icon" className="clock-icon" />
        <img
          src={times}
          alt="times-icon"
          className="times-icon"
          onClick={() => closeTimerSettings()}
        />
      </div>
      <div className="timer-settings">
        <p>Одбери време</p>
        <div className="input-group">
          <div className="inputs">
            {!isActive ? (
              <input
                type="number"
                name="minutes"
                value={formatTime(timer.minutes)}
                onChange={(e) =>
                  e.target.value < 100 &&
                  setTimer({ ...timer, minutes: parseInt(e.target.value) })
                }
              />
            ) : (
              <span>{formatTime(timer.minutes)}</span>
            )}
            {":"}
            {!isActive ? (
              <input
                type="number"
                name="seconds"
                value={formatTime(timer.seconds)}
                onChange={(e) =>
                  e.target.value < 60 &&
                  setTimer({ ...timer, seconds: parseInt(e.target.value) })
                }
              />
            ) : (
              <span>{formatTime(timer.seconds)}</span>
            )}
          </div>
          <img src={clock} alt="clock-icon" className="clock-icon" />
        </div>
        <p>Одбери акција</p>
        <div className="actions">
          <input
            type="checkbox"
            id="stop-sound"
            name="Прекини звук"
            checked={checked === "Прекини звук"}
            onChange={(e) => setChecked(e.target.name)}
          />
          <label htmlFor="stop-sound">Прекини звук</label>
          <input
            type="checkbox"
            id="lower-sound"
            name="Намали звук"
            checked={checked === "Намали звук"}
            onChange={(e) => setChecked(e.target.name)}
          />
          <label htmlFor="lower-sound">Намали звук</label>
        </div>

        <button onClick={() => hideTimer(false)} className="btn-timer">
          Зачувај
        </button>
      </div>
    </div>
  );
};

export default Timer;
