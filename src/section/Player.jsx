import React, { useEffect, useRef, useState } from "react";
import {
  Smute,
  Spause,
  Splay,
  Sreplay,
  Stranslation,
  Svolume,
  Szoomin,
  Szoomout,
} from "../components/Svg";
function Player({ src }) {
  const [isPlay, setIsPlay] = useState(true);
  const [isVolume, setIsVolume] = useState(true);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [timeDuration, setTimeDuration] = useState("");
  const [timeCurrent, setTimeCurrent] = useState("");
  const [zoomIn, setZoomIn] = useState(false);
  const [isReplay, setIsReplay] = useState(false);
  const [isTranslate, setIsTranslate] = useState(false);
  const videoRef = useRef(); // this how we connect control with video
  const bowlVideo = useRef(); // for full screen video
  const rangeProgres = useRef(); // when video progress
  // for play or pause the video

  const handlePlayPause = () => {
    if (isPlay) {
      setIsPlay(false);
      videoRef.current.pause();
    } else {
      setIsPlay(true);
      videoRef.current.play();
    }
  };

  useEffect(() => {
    setIsPlay(true);
    videoRef.current.play();
  }, [src]);
  // when video finish
  const endedVideo = () => {
    setIsReplay(true);
    handlePlayPause();
  };

  // for make video voice mute or volume and why can rate it with range input
  const volumeMute = () => {
    if (isVolume) {
      setIsVolume(false);
      videoRef.current.volume = 0;
    } else {
      setIsVolume(true);
      videoRef.current.volume = 1;
    }
  };

  //here get time video and time current and convert this to normal time for user
  // and for progress video
  const timerCount = (e) => {
    if (setIsReplay) {
      setIsReplay(false);
    }
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);

    setProgressPercentage(percent);
    setTimeCurrent(
      convertPercentTOTime(Math.round(videoRef.current.currentTime))
    );
    setTimeDuration(
      convertPercentTOTime(Math.round(videoRef.current.duration))
    );
  };

  // for time video to time user
  const convertPercentTOTime = (seconds) => {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    return `${min}:${sec}`;
  };

  //for make vidoe in mode full or out screen
  const zoomTry = () => {
    if (zoomIn) {
      setZoomIn(false);
      document.exitFullscreen();
    } else {
      setZoomIn(true);
      bowlVideo.current.requestFullscreen();
    }
  };

  // change progress and time video when click range
  const progressVideoClick = (e) => {
    videoRef.current.currentTime =
      (videoRef.current.duration / 100) * e.target.value;
    setProgressPercentage(e.target.value);
  };

  return (
    <div className="wrapper_player">
      <div className={`bowl_video ${zoomIn ? "zoom" : null}`} ref={bowlVideo}>
        <video
          ref={videoRef}
          src={src}
          onEnded={endedVideo}
          onTimeUpdate={timerCount}
          autoPlay
        />
        <div className={`control_player`}>
          <div
            className="layout"
            onClick={handlePlayPause}
            onDoubleClick={zoomTry}
          ></div>
          {isTranslate ? (
            <div className="bowl_translation">
              <span>here your translate {timeCurrent}</span>
            </div>
          ) : null}
          {isReplay ? (
            <div className="replay_video">
              <Sreplay onClick={handlePlayPause} />
            </div>
          ) : null}
          <div className="bar_progress">
            <input
              value={progressPercentage}
              type="range"
              onChange={progressVideoClick}
              ref={rangeProgres}
              min={0}
              max={100}
              step={0.1}
              className="progress_video"
              style={{ "--seek-before-width": progressPercentage + "%" }}
            />
          </div>
          <div className="bar_player">
            <div className="play_pause btns_bar_player">
              {isPlay ? (
                <Spause clas="" onClick={handlePlayPause} />
              ) : (
                <Splay clas="" onClick={handlePlayPause} />
              )}
            </div>
            <div className="mute_volume btns_bar_player">
              {isVolume ? (
                <Svolume onClick={volumeMute} />
              ) : (
                <Smute onClick={volumeMute} />
              )}
            </div>
            <div className="bowl_time_vid btns_bar_player">
              <span>{timeCurrent}</span>
              <span>&nbsp; / &nbsp;</span>
              <span>{timeDuration}</span>
            </div>
            <div className="second_side">
              <div className="translation">
                <Stranslation onClick={() => setIsTranslate(!isTranslate)} />
              </div>
              <div className="zoom_screen">
                {zoomIn ? (
                  <Szoomout onClick={zoomTry} />
                ) : (
                  <Szoomin onClick={zoomTry} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
