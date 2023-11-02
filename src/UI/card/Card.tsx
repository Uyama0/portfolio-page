import { useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";

import { round, distance } from "../../utilities/tiltCard";

export const Card = () => {
  const [rotations, setRotations] = useState({ x: 0, y: 0, z: 0 });
  const [isAnimating, setAnimating] = useState(false);
  const isAnimatingReference = useRef(isAnimating);

  const animate = (event: MouseEvent) => {
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
  };

  const stopAnimating = () => {
    setAnimating(false);

    setTimeout(() => {
      if (isAnimatingReference.current) return;

      setRotations({ x: 0, y: 0, z: 2 });
    }, 100);
  };

  return (
    <motion.div
      onMouseMove={animate}
      onMouseLeave={stopAnimating}
      animate={{
        rotateY: rotations.x,
        rotateX: rotations.y,
        transformPerspective: rotations.z * 300,
      }}
      className={`rounded-md flex bg-black border flex-col text-3xl p-4 cursor-crosshair`}
    >
      <div className="justify-between flex">
        <div></div>
        <button>visit</button>
      </div>
      <div className="justify-center items-center flex flex-grow">
        <h1>Portfolio page</h1>
      </div>
      <div className="justify-between flex">
        <p className="text-2xl">portfolio page 2023</p>
      </div>
    </motion.div>
  );
};
