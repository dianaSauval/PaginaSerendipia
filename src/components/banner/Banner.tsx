import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Element } from "react-scroll";
import AnimatedWave from "../animatedWave/AnimatedWave";
import Video from "../videos/trailer.mp4";
import "./banner.css";
import VideoWebm from "../videos/trailer_compressed.webm"; // Ajusta la ruta relativa



const Banner = () => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Detecta si es móvil
    const video = isMobile ? VideoWebm : Video; // Selección de formato según dispositivo
    setVideoUrl(video); // Asigna la URL del video correspondiente
  }, []);

  return (
    <Element name="banner" id="banner">
      <div className="player-wrapper">
        {videoUrl && (
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            playing={true}
            playsinline={true}
            webkit-playsinline={true}
            loop
            muted
            className="react-player"
            config={{
              file: {
                attributes: {
                  preload: "auto", // Pre-carga automática para mayor rendimiento
                },
              },
            }}
          />
        )}
        <div className="wave">
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
