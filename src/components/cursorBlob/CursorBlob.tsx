import { useEffect } from "react";
import "./CursorStyle.css";

export const CursorBlob = () => {
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
  }, []);

  return (
    <>
      <div id="blob"></div>
      <div id="blur"></div>
    </>
  );
};
