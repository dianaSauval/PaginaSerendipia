import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Element } from "react-scroll";
import AnimatedWave from "../animatedWave/AnimatedWave";
import Video from "../videos/trailer.mp4";
import VideoWebm from "../videos/trailer_compressed.webm";
import "./banner.css";

const Banner = () => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const video = isMobile ? VideoWebm : Video;

    setVideoUrl(video);
  }, []);

  return (
    <Element name="banner" id="banner">
      <section className="banner-section">
        <div className="player-wrapper">
          {videoUrl && (
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              playing={true}
              playsinline={true}
              webkit-playsinline="true"
              loop
              muted
              className="react-player"
              config={{
                file: {
                  attributes: {
                    preload: "auto",
                  },
                },
              }}
            />
          )}

          <div className="banner-overlay" />

          <AnimatedWave position="bottom" />
        </div>
      </section>
    </Element>
  );
};

export default Banner;