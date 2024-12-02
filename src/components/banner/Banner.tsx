import React from "react";
import ReactPlayer from "react-player";
import { Element } from "react-scroll";
import AnimatedWave from "../animatedWave/AnimatedWave";
import Video from "../videos/trailer.mp4";
import "./banner.css";

const Banner = () => {
  return (
    <Element name="banner">
      <div className="player-wrapper">
        <ReactPlayer
          url={Video}
          width="100%"
          height="100%"
          playing={true}
          loop
          muted
          className="react-player"
        />
        <div className="wave">
          {/* La onda principal se superpone ligeramente */}
          <AnimatedWave
            color={"#fff"}
            animationDuration="4s"
            opacity={"1"}
            style={{ position: "absolute", bottom: "-1px", zIndex: 1 }}
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
  );
};

export default Banner;





