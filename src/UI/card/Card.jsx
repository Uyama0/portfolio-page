import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { round, distance } from "../../utilities/tiltCard";

export const Card = () => {
  const [rotations, setRotations] = useState({ x: 0, y: 0, z: 0 });
  const [isAnimating, setAnimating] = useState(false);
  const isAnimatingReference = useRef(isAnimating);
  const [glare, setGlare] = useState({ x: 0, y: 0, opacity: 0 });

  const animate = (event) => {
    setAnimating(true);

    const rect = event.currentTarget.getBoundingClientRect();

    const absolute = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    const percent = {
      x: round((100 / rect.width) * absolute.x),
      y: round((100 / rect.height) * absolute.y),
    };

    const center = {
      x: percent.x - 50,
      y: percent.y - 50,
    };

    setRotations({
      x: round(((center.x > 50 ? 1 : -1) * center.x) / 12),
      y: round(center.y / 16),
      z: round(distance(percent.x, percent.y, 50, 50) / 20),
    });

    setGlare({
      x: percent.x,
      y: percent.y,
      opacity: 0.25,
    });
  };

  const stopAnimating = () => {
    setAnimating(false);

    setTimeout(() => {
      if (isAnimatingReference.current) return;

      setRotations({ x: 0, y: 0, z: 2 });
      setGlare({ x: 50, y: 50, opacity: 0 });
    }, 100);
  };

  return (
    <motion.div
      onMouseMove={animate}
      onMouseLeave={stopAnimating}
      animate={{
        rotateY: rotations.x,
        rotateX: rotations.y,
        transformPerspective: rotations.z * 100,
      }}
      className="w-60 h-80 rounded-md flex bg-pink-900 items-center justify-center presev"
    >
      <motion.div
        className="border border-white"
        style={{
          zIndex: 2,
          mixBlendMode: "overlay",
          position: "absolute",
          transform: "translateZ(1px)",
          width: "100%",
          height: "100%",
          borderRadius: "0.5rem",
          transformStyle: "preserve-3d",
        }}
        animate={{
          background: `radial-gradient(
            farthest-corner circle at ${glare.x}% ${glare.y}%,
            rgba(255, 255, 255, 0.7) 10%,
            rgba(255, 255, 255, 0.5) 24%,
            rgba(0, 0, 0, 0.8) 82%
          )`,
          opacity: glare.opacity,
        }}
      />
      <p>LIGMA</p>
    </motion.div>
  );
};
