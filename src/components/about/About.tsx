import { motion } from "framer-motion";

import Miyamoto1 from "../../assets/miyamoto.jpg";

import { bottomRevealAnimation } from "../../utilities/framerVariants/framerAnimation";

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row flex-1 h-[calc(100vh-77px)]">
      <div className="flex-1"></div>
      <div className="flex-1 flex flex-col gap-6 justify-center md:items-start">
        <img
          className="max-w-[360px] h-60 md:max-w-sm md:h-64 rounded-xl object-cover"
          src={Miyamoto1}
          alt="miyamoto"
        />
        <div className="max-w-sm">
          <motion.h1
            initial="hidden"
            animate="onceVisible"
            variants={bottomRevealAnimation}
          >
            Inspired by development
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="onceVisible"
            variants={bottomRevealAnimation}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            mollitia quas corrupti quod, voluptas quam soluta id ex iure quis a
            deserunt dolore magni laboriosam ipsa illum delectus laudantium
            veniam.
          </motion.p>
        </div>
      </div>
    </div>
  );
};
