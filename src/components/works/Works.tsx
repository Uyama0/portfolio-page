import { Card } from "../../UI/card/Card.jsx";

import { motion } from "framer-motion";

import { bottomRevealAnimation } from "../../utilities/framerVariants/framerAnimation";

export const Works = () => {
  return (
    <div className="grid gap-4">
      <motion.div
        initial="hidden"
        animate="onceVisible"
        variants={bottomRevealAnimation}
        className=" md:grid md:grid-cols-3 h-60 gap-4"
      >
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="onceVisible"
        variants={bottomRevealAnimation}
        className="grid md:grid-cols-2 h-80 gap-4"
      >
        <Card></Card>
        <Card></Card>
      </motion.div>
      <div className="grid md:grid-cols-3 h-60 gap-4">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};
