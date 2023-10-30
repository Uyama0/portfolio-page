import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import "./CursorStyle.css";

export const CursorBlob = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const blob = document.getElementById("blob");

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 8000, fill: "forwards" }
      );
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = 1 + scrollY * 0.001;

  return (
    <>
      <motion.div
        id="blob"
        animate={{ scale: scale }}
        transition={{
          type: "spring",
        }}
      ></motion.div>
      <div id="blur"></div>
    </>
  );
};
