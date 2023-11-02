import { Button } from "../../UI/Button";
import { motion } from "framer-motion";

const revealAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const Header = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="flex flex-1 py-5"
    >
      <motion.div variants={revealAnimation} className="flex-1 text-3xl ">
        Uyama
      </motion.div>
      <motion.ul
        variants={revealAnimation}
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
