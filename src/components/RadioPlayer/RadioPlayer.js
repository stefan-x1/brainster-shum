import React, { useContext } from "react";

import { RadioContext } from "../../context/radioContext";

import "./RadioPlayer.css";

// icons
import RadioLogo from "../../assets/icons/Vynil-logo.svg";
import lowVolume from "../../assets/icons/volume-down-solid.svg";
import highVolume from "../../assets/icons/volume-up-solid.svg";
import muteVolume from "../../assets/icons/volume-mute-solid.svg";
import pauseIcon from "../../assets/icons/pause-solid.svg";
import playIcon from "../../assets/icons/play-solid.svg";

const RadioPlayer = () => {
  const {
    active,
    playMusic,
    setPlayMusic,
    mainVolume,
    setMainVolume,
    setMainVolumeChange,
    mainVolumeMute,
    setMainVolumeMute,
    timer,
    setTimer,
    setTimerAction,
  } = useContext(RadioContext);

  let volumeIcon =
    mainVolume > 0 && mainVolume < 51 && !mainVolumeMute
      ? lowVolume
      : mainVolume > 51 && !mainVolumeMute
      ? highVolume
      : muteVolume;

  const handleMainVolume = (e) => {
    mainVolume !== e.target.value && setMainVolumeMute(false);

    setMainVolume(parseInt(e.target.value));
  };

  const playMusicFunc = () => {
    if (active !== null) {
      setPlayMusic(!playMusic);
      setTimerAction("");

      if (!playMusic) {
        if (timer.minutes === 0 && timer.seconds === 0) {
          const defaultTimerValue = {
            minutes: 25,
            seconds: 0,
          };

          setTimer(defaultTimerValue);
        }
      }
    }
  };

  return (
    <div className="RadioPlayer">
      <img src={RadioLogo} alt="Radio Logo" className="radio-logo" />
      <img
        src={playMusic ? pauseIcon : playIcon}
        alt="Music Icon"
        className="play-btn"
        onClick={playMusicFunc}
      />
      <div className="range">
        <img
          src={volumeIcon}
          className="volume-icon"
          alt="volume icon"
          onClick={() => setMainVolumeMute(!mainVolumeMute)}
        />
        <input
          type="range"
          value={mainVolume}
          className="large"
          onChange={(e) => handleMainVolume(e)}
          onFocus={() => setMainVolumeChange(true)}
          onBlur={() => setMainVolumeChange(false)}
        />
      </div>
    </div>
  );
};

export default RadioPlayer;
