import "../css/Music.css";
import Lofi from "../songs/lofi.mp3";
import Nature from "../songs/nature.mp3";
import ReactAudioPlayer from "react-audio-player";
import { Component } from "react";
import { useState } from "react";

function Music() {
  return (
    <div className="music-player">
      <div className="music-player-card">
        <p className="music-player-heading">Music Controls</p>
        <div className="music-player-controls">
          <div className="music-player-controls-title">✨ Lofi Music</div>
          <ReactAudioPlayer
            className="music-controls"
            src={Lofi}
            autoPlay
            controls
            loop
            controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
          />
          <div className="music-player-controls-title">🍁 Nature Sounds</div>
          <ReactAudioPlayer
            className="music-controls"
            src={Nature}
            autoPlay
            controls
            loop
            controlsList="nofullscreen nodownload noplaybackrate "
          />
        </div>
      </div>
    </div>
  );
}

export default Music;
