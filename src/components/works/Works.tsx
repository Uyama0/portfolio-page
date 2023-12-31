import { Card } from "../../UI/card/Card.jsx";

import { motion } from "framer-motion";

import { bottomRevealAnimation } from "../../utilities/framerVariants/framerAnimation";

export const Works = () => {
  return (
    <div id="works" className="grid gap-4 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={bottomRevealAnimation}
        className="grid md:grid-cols-3 md:h-60 gap-4"
      >
        <Card
          workLink="https://github.com/Uyama0/smooth-animated-todo-app-v2"
          workName="todo v2"
        />
        <Card
          workLink="https://github.com/Uyama0/portfolio-page"
          workName="portfolio page"
        />
        <Card workLink="" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={bottomRevealAnimation}
        className="grid md:grid-cols-2 md:h-80 gap-4"
      >
        <Card></Card>
        <Card></Card>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={bottomRevealAnimation}
        className="grid md:grid-cols-3 md:h-60 gap-4"
      >
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </motion.div>
    </div>
  );
};
