import { useState } from "react";
import { motion } from "framer-motion";

import "./ContactButtonStyles.css";

interface ContactButtonProps {
  title: string;
}

function ContactButton({ title }: ContactButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <>
      <div
        className="relative"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <motion.button
          className="button"
          initial={isHovered ? { clipPath: "inset(0 0 0 0)" } : {}}
          animate={
            isHovered
              ? { clipPath: "inset(0 0 100% 0)" }
              : { clipPath: "inset(0 0 0 0)" }
          }
          transition={{ duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
        >
          {title}
        </motion.button>
        <motion.button className="button clone">{title}</motion.button>
      </div>
    </>
  );
}

export default ContactButton;
