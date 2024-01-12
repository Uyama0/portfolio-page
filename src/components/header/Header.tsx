import { Button } from "../../UI/Button";
import { motion } from "framer-motion";

import { topRevealAnimation } from "../../utilities/framerVariants/framerAnimation";
import { setPostponedAnimation } from "../../utilities/setPostponedAnimation";

export const Header = () => {
  const customTopRevealAnimation = setPostponedAnimation({
    animationProps: topRevealAnimation,
    durationTime: 1.5,
    delayFactor: 0.6,
  });

  return (
    <div className="flex flex-1 py-5">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={customTopRevealAnimation}
        className="flex-1 text-3xl"
      >
        Uyama
      </motion.div>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={customTopRevealAnimation}
        className="flex-1 flex-row hidden md:flex md:space-x-16 items-center"
      >
        <li>
          <Button targetId="about" title={"About"} />
        </li>
        <li>
          <Button targetId="works" title={"Works"} />
        </li>
        <li>
          <Button targetId="contact" title={"Contact"} />
        </li>
      </motion.ul>
    </div>
  );
};
