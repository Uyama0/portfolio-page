import { motion } from "framer-motion";

interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  const underlineVariants = {
    initial: {
      width: "0%",
    },
    hover: {
      width: "100%",
    },
  };

  return (
    <motion.button
      className="text-white relative overflow-hidden"
      whileHover="hover"
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-white"
        variants={underlineVariants}
      />
      {title}
    </motion.button>
  );
};
