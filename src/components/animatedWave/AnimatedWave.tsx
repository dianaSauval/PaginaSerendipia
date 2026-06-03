// components/AnimatedWave.tsx
import "./animatedWave.css";

type AnimatedWaveProps = {
  position?: "top" | "bottom";
};

const AnimatedWave = ({ position = "bottom" }: AnimatedWaveProps) => {
  return (
    <div className={`animated-waves animated-waves--${position}`}>
      <div className="wave wave-1" />
      <div className="wave wave-2" />
      <div className="wave wave-3" />
    </div>
  );
};

export default AnimatedWave;