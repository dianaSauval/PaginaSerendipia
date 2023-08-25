import React from "react";
import Wave from "react-wavify";
import Video from "../videos/trailer.mp4";
import ReactPlayer from "react-player";
import "./banner.css"

const Banner = () => {
  return (
    <>
      <div className="player-wrapper">
        <ReactPlayer
          url={Video}
          width="100%"
          height="100%"
          playing={true}
          loop
          muted
          //volume="0.4"
          className="react-player"
        />
        <div className="wave"></div>
      </div>
    </>
  );
};

export default Banner;
