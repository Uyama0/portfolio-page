import { motion } from "framer-motion";

import "./ContactButtonStyles.css";

interface ContactButtonProps {
  title: string;
}

function ContactButton({ title }: ContactButtonProps) {
  return (
    <>
      <div>
        <motion.button id="button">
          <h2>{title}</h2>
        </motion.button>
      </div>
    </>
  );
}

export default ContactButton;
