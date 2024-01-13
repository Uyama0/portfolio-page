import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import hwPx from "../../assets/pixil-frame-1.png";
import lwPx from "../../assets/pixil-frame-0.png";

import { bottomRevealAnimation } from "../../utilities/framerVariants/framerAnimation";
import { setPostponedAnimation } from "../../utilities/setPostponedAnimation";

export const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [hwPx, lwPx];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const customBottomRevealAnimation = setPostponedAnimation({
    animationProps: bottomRevealAnimation,
    durationTime: 0.5,
    delayFactor: 0.6,
  });

  return (
    <div
      id="about"
      className="flex flex-col md:flex-row flex-1 h-[calc(100vh-77px)]"
    >
      <div className="md:flex-1"></div>
      <div className="flex-1 flex flex-col gap-3 justify-center md:items-start">
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={customBottomRevealAnimation}
          className="max-w-sm h-60 md:max-w-sm md:h-64 rounded-xl object-cover"
          src={images[currentImage]}
          alt="px"
        />
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={customBottomRevealAnimation}
          className="max-w-sm"
        >
          Inspired by development
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={customBottomRevealAnimation}
          className="max-w-sm"
        >
          Web developer with passion for building digital services/staff. I
          realized quite late how pleasant it is to write code. Now I've got a
          clear idea of what I want to achieve.
        </motion.p>
      </div>
    </div>
  );
};
