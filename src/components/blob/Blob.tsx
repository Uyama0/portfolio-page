import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

import "./blobStyle.css";

export const CursorBlob = () => {
  const scrollY = useScrollAnimation();

  const scale = 1.3 + scrollY * 0.001;

  return (
    <>
      <motion.div
        id="blob"
        animate={{ scale: scale }}
        transition={{
          type: "spring",
        }}
      ></motion.div>
    </>
  );
};
