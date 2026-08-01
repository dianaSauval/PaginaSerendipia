import React from "react";
import "./DecorativeWheel.css";

type DecorativeWheelProps = {
  className?: string;
};

const DecorativeWheel = ({ className = "" }: DecorativeWheelProps) => (
  <span className={`cv-decorative-wheel ${className}`} aria-hidden="true">
    <span className="cv-decorative-wheel__outer" />
    <span className="cv-decorative-wheel__middle" />
    <span className="cv-decorative-wheel__inner" />
  </span>
);

export default DecorativeWheel;
