import React, { useState, useEffect, useContext } from "react";
import ReactHowler from "react-howler";

import { RadioContext } from "../../context/radioContext";

import "./SubSound.css";

const SubSound = ({ icon, name, sound }) => {
  const [volume, setVolume] = useState(50);
  const [volumeRatio, setVolumeRatio] = useState(1);

  const {
    playMusic,
    mainVolume,
    setMainVolume,
    mainVolumeChange,
    mainVolumeMute,
    timerAction,
  } = useContext(RadioContext);

  const handleVolumeChange = (e) => {
    const newVolumeValue = parseInt(e.target.value);

    newVolumeValue > mainVolume && setMainVolume(newVolumeValue);

    setVolume(newVolumeValue);
  };

  useEffect(() => {
    if (mainVolumeChange) setVolume(mainVolume * volumeRatio);

    if (!mainVolumeChange) setVolumeRatio(volume / mainVolume);
  }, [mainVolume, volumeRatio, mainVolumeChange, volume]);

  useEffect(() => {
    timerAction === "Намали звук" && setVolume((volume) => volume / 2);
  }, [timerAction]);

  return (
    <div className="SubSound">
      <img src={icon} alt="Volume Icon" />
      <input
        type="range"
        name={name}
        className="small"
        value={volume}
        onChange={(e) => handleVolumeChange(e)}
      />
      <ReactHowler
        src={sound}
        playing={playMusic}
        loop={true}
        html5={true}
        preload={true}
        volume={mainVolumeMute ? 0 : volume / 100}
      />
    </div>
  );
};

export default SubSound;
