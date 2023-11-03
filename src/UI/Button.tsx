import { motion } from "framer-motion";

interface ButtonProps {
  title: string;
  targetId: string;
}

export const Button = ({ title, targetId }: ButtonProps) => {
  const underlineVariants = {
    initial: {
      width: "0%",
    },
    hover: {
      width: "100%",
    },
  };

  const handleClick = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 85,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.button
      className="text-white relative overflow-hidden"
      whileHover="hover"
      onClick={handleClick}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-white"
        variants={underlineVariants}
      />
      {title}
    </motion.button>
  );
};
