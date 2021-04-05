import React, { useState, useContext } from "react";

import ShareIcons from "../ShareIcons/ShareIcons";
import Timer from "../Timer/Timer";

import { RadioContext } from "../../context/radioContext";

import "./Header.css";

// icons
import share from "../../assets/icons/share-alt-solid.svg";
import random from "../../assets/icons/random-solid.svg";
import clock from "../../assets/icons/clock-regular.svg";

const Header = () => {
  const [showTimer, setShowTimer] = useState(false);
  const [shareIconsMenu, setShareIconsMenu] = useState(false);

  const { timer, setActive, radioData } = useContext(RadioContext);

  const closeShareIconsMenu = () => {
    setShareIconsMenu(false);
  };

  const closeTimerSettings = () => {
    setShowTimer(false);
  };

  const formatTime = (time) => {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  };

  const setRandomSound = () => {
    const dataLength = radioData.length;
    const randomNum = Math.floor(Math.random() * dataLength);

    setActive(radioData[randomNum]);
  };

  return (
    <div className="Header">
      <div className="logo">
        <img src="./images/logo.png" alt="Shum Logo" />
      </div>
      <div className="menu">
        <ShareIcons
          closeShareIconsMenu={closeShareIconsMenu}
          style={shareIconsMenu ? styles.shareMenu : null}
        />

        <div className="icon">
          <img
            src={share}
            alt="share-icon"
            onClick={() => setShareIconsMenu(true)}
          />
        </div>

        <div className="icon" onClick={setRandomSound}>
          <img src={random} alt="random-icon" />
        </div>
        <div className="icon timer" onClick={() => setShowTimer(true)}>
          <img src={clock} alt="clock-icon" />
          <span>
            {formatTime(timer?.minutes)}:{formatTime(timer?.seconds)}
          </span>
        </div>
        <Timer
          style={showTimer ? styles.shareMenu : null}
          closeTimerSettings={closeTimerSettings}
          hideTimer={setShowTimer}
        />
      </div>
    </div>
  );
};

export default Header;

const styles = {
  shareMenu: {
    opacity: "1",
    zIndex: "1",
  },
};
