import { motion } from "framer-motion";

import Miyamoto1 from "../../assets/miyamoto.jpg";

import { bottomRevealAnimation } from "../../utilities/framerVariants/framerAnimation";

const customBottomRevealAnimation = {
  ...bottomRevealAnimation,
  onceVisible: (custom: number) => ({
    ...bottomRevealAnimation.visible,
    transition: { delay: custom * 0.5, duration: 0.6 },
  }),
};

export const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row flex-1 h-[calc(100vh-77px)]"
    >
      <div className="md:flex-1"></div>
      <div className="flex-1 flex flex-col gap-3 justify-center md:items-start">
        <img
          className="max-w-sm h-60 md:max-w-sm md:h-64 rounded-xl object-cover"
          src={Miyamoto1}
          alt="miyamoto"
        />
        <motion.h1
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={customBottomRevealAnimation}
          className="max-w-sm"
        >
          Inspired by development
        </motion.h1>
        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={customBottomRevealAnimation}
          className="max-w-sm"
        >
          I realized quite late how pleasant it is to write code. But now I know
          exactly what I want to do. In particular, I love creating
          <span className="text-purple-600"> BEAUTIFUL </span>
          web applications. Well, or not quite beautiful (yet).
        </motion.p>
      </div>
    </div>
  );
};
