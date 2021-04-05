import React, { useState, useEffect, createContext } from "react";

import { API } from "../consts/Api";

export const RadioContext = createContext({});

export const RadioContextProvider = ({ children }) => {
  const [radioData, setRadioData] = useState({});
  const [active, setActive] = useState(null);
  const [playMusic, setPlayMusic] = useState(false);
  const [mainVolume, setMainVolume] = useState(50);
  const [mainVolumeMute, setMainVolumeMute] = useState(false);
  const [mainVolumeChange, setMainVolumeChange] = useState(false);
  const [timerAction, setTimerAction] = useState("");
  const [timer, setTimer] = useState({
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    fetch(API.paths.music)
      .then((res) => res.json())
      .then((data) => setRadioData(data.music));
  }, []);

  useEffect(() => {
    timerAction === "Намали звук" &&
      setMainVolume((mainVolume) => mainVolume / 2);
  }, [timerAction]);

  const radioContext = {
    playMusic,
    setPlayMusic,
    timer,
    setTimer,
    active,
    setActive,
    mainVolume,
    setMainVolume,
    radioData,
    mainVolumeChange,
    setMainVolumeChange,
    mainVolumeMute,
    setMainVolumeMute,
    timerAction,
    setTimerAction,
  };

  return (
    <RadioContext.Provider value={radioContext}>
      {children}
    </RadioContext.Provider>
  );
};
