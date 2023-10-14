import React from "react";
import Wave from "react-wavify";
import Video from "../videos/trailer.mp4";
import ReactPlayer from "react-player";
import "./banner.css";
import { Element } from "react-scroll";
import AnimatedWave from "../animatedWave/AnimatedWave";

const Banner = () => {
  return (
    <>
      <Element name="banner">
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
          {/* <div className="wave"></div> */}
          <div className="wave">
            <AnimatedWave
              color={"#fff"}
              animationDuration="4s"
              opacity={"0.8"}
            />
            <AnimatedWave
              color={"#fff"}
              animationDuration="12s"
              opacity={"0.5"}
            />
            <AnimatedWave
              color={"#fff"}
              animationDirection="reverse"
              animationDuration="10s"
              opacity={"0.2"}
            />
          </div>
        </div>
      </Element>
    </>
  );
};

export default Banner;
