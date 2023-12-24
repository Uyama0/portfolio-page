import { Button } from "../../UI/Button";
import { motion } from "framer-motion";

import { topRevealAnimation } from "../../utilities/framerVariants/framerAnimation";

const customTopRevealAnimation = {
  ...topRevealAnimation,
  visible: () => ({
    ...topRevealAnimation.visible,
    transition: { delay: 1.5, duration: 0.6 },
  }),
};

export const Header = () => {
  return (
    <motion.div className="flex flex-1 py-5">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={customTopRevealAnimation}
        className="flex-1 text-3xl "
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
    </motion.div>
  );
};
