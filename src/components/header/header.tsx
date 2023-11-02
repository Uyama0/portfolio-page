import { Button } from "../../UI/Button";
import { motion } from "framer-motion";

import { topRevealAnimation } from "../../utilities/framerVariants/framerAnimation";

export const Header = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="onceVisible"
      className="flex flex-1 py-5"
    >
      <motion.div
        initial="hidden"
        animate="onceVisible"
        variants={topRevealAnimation}
        className="flex-1 text-3xl "
      >
        Uyama
      </motion.div>
      <motion.ul
        initial="hidden"
        animate="onceVisible"
        variants={topRevealAnimation}
        className="flex-1 flex-row hidden md:flex md:space-x-16 items-center"
      >
        <li>
          <Button title={"About"} />
        </li>
        <li>
          <Button title={"Works"} />
        </li>
        <li>
          <Button title={"Contact"} />
        </li>
      </motion.ul>
    </motion.div>
  );
};
