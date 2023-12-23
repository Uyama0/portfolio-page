import { useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";

import { round, distance } from "../../utilities/tiltCard";

interface cardProps {
  workLink?: string;
  workName?: string;
}

export const Card = ({
  workLink = "https://github.com/Uyama0?tab=repositories",
  workName = "Soon.",
}: cardProps) => {
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
      <div className="justify-between flex relative">
        <a
          href={workLink}
          className="border rounded-lg px-3 py-2 flex absolute right-0"
        >
          <span className="text-xl">visit</span>
        </a>
      </div>
      <div className="justify-center items-center flex flex-grow">
        <h1 className="font-bold">{workName}</h1>
      </div>
    </motion.div>
  );
};
