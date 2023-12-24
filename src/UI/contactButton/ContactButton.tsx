import { motion } from "framer-motion";

import "./ContactButtonStyles.css";

interface ContactButtonProps {
  title: string;
  contactLink: string;
}

function ContactButton({ title, contactLink }: ContactButtonProps) {
  return (
    <>
      <div>
        <motion.button
          id="button"
          onClick={() => (window.location.href = contactLink)}
        >
          <h2 className="relative">{title}</h2>
        </motion.button>
      </div>
    </>
  );
}

export default ContactButton;
