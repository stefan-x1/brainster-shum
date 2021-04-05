import React, { useState, useEffect, useContext } from "react";
import ReactHowler from "react-howler";

import RadioPlayer from "../RadioPlayer/RadioPlayer";
import SubSound from "../SubSound/SubSound";

import { RadioContext } from "../../context/radioContext";

import { API } from "../../consts/Api";

import "./Radio.css";

// icons
import lowVolume from "../../assets/icons/volume-down-solid.svg";
import highVolume from "../../assets/icons/volume-up-solid.svg";
import muteVolume from "../../assets/icons/volume-mute-solid.svg";

const Radio = () => {
  const [categoryVolume, setCategoryVolume] = useState(50);
  const [volumeRatio, setVolumeRatio] = useState(1);
  const [muted, setMuted] = useState(false);

  const {
    playMusic,
    active,
    setActive,
    radioData,
    mainVolume,
    setMainVolume,
    mainVolumeChange,
    mainVolumeMute,
    timerAction,
  } = useContext(RadioContext);

  const handleVolumeChange = (e) => {
    const newVolumeValue = parseInt(e.target.value);

    categoryVolume !== newVolumeValue && setMuted(false);

    newVolumeValue > mainVolume && setMainVolume(newVolumeValue);

    setCategoryVolume(newVolumeValue);
  };

  useEffect(() => {
    if (mainVolumeChange) setCategoryVolume(mainVolume * volumeRatio);

    if (!mainVolumeChange) setVolumeRatio(categoryVolume / mainVolume);
  }, [mainVolume, volumeRatio, mainVolumeChange, categoryVolume]);

  useEffect(() => {
    setMuted(mainVolumeMute);
  }, [mainVolumeMute]);

  useEffect(() => {
    timerAction === "Намали звук" &&
      setCategoryVolume((categoryVolume) => categoryVolume / 2);
  }, [timerAction]);

  const isSafari =
    navigator.vendor &&
    navigator.vendor.indexOf("Apple") > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf("CriOS") === -1 &&
    navigator.userAgent.indexOf("FxiOS") === -1;

  let volumeIcon =
    categoryVolume > 0 && categoryVolume < 51 && !muted
      ? lowVolume
      : categoryVolume > 51 && !muted
      ? highVolume
      : muteVolume;

  return (
    <div className="Radio">
      <RadioPlayer />
      <div className="radio-mixer">
        <div className="radio-category">
          {radioData.length > 0 &&
            radioData.map((item, index) => (
              <div key={index} onClick={() => setActive(item)} className="item">
                <img
                  src={
                    item.id === active?.id
                      ? API.url + item.active_icon
                      : API.url + item.static_icon
                  }
                  alt={item.sound_name}
                  className="category-icon"
                />
                <p
                  className={
                    item.id === active?.id ? "item-name" : "item-name hide-name"
                  }
                >
                  {item.name}
                </p>
                <div
                  className={
                    item.id === active?.id
                      ? "input-group"
                      : "input-group hide-input-group"
                  }
                >
                  <img
                    src={volumeIcon}
                    className="volume-icon"
                    alt="volume icon"
                    onClick={() => setMuted(!muted)}
                  />
                  {active?.sounds?.file_ogg && (
                    <ReactHowler
                      src={
                        !isSafari
                          ? API.url + active?.sounds?.file_ogg
                          : API.url + active?.sounds?.file_mp3
                      }
                      playing={playMusic}
                      html5={true}
                      loop={true}
                      preload={true}
                      volume={muted ? 0 : categoryVolume / 100}
                    />
                  )}

                  <input
                    type="range"
                    name={item.name}
                    value={categoryVolume}
                    onChange={(e) => handleVolumeChange(e)}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="radio-subcategories">
          {active === null ? (
            <p>
              Одберете ја вашата омилена категорија на звуци и работете
              продуктивно.
            </p>
          ) : (
            <div className="sub-categories">
              {active?.subsound_name?.map((subsound, index) => (
                <SubSound
                  icon={API.url + subsound.icon}
                  key={index}
                  sound={
                    !isSafari
                      ? API.url + subsound.sounds.file_ogg
                      : API.url + subsound.sounds.file_mp3
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Radio;
