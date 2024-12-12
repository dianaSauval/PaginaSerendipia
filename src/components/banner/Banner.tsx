import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Element } from "react-scroll";
import AnimatedWave from "../animatedWave/AnimatedWave";
import Video from "../videos/trailer.mp4";
import VideoWebm from "../videos/trailer.mp4"; // Video en formato webm
import "./banner.css";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Asumimos que 768px es el límite para dispositivos móviles
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Element name="banner">
      <div className="player-wrapper">
        <ReactPlayer
          url={isMobile ? VideoWebm : Video} // Usar el video webm para móviles si está disponible
          width="100%"
          height="100%"
          playing={true}
          playsinline={true}
          loop
          muted
          className="react-player"
          config={{
            file: {
              attributes: {
                preload: 'auto', // Cargar el video de inmediato
              },
            },
          }}
        />
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
