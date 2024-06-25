"use client";

import React from "react";
import "../styles/_header.scss";
import { motion } from "framer-motion";

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 1 },
  },
};

function Header() {
  return (
    <div className="header-up">
      <div className="left">
        <motion.a
          {...textVariants}
          target="blank"
          href="https://www.facebook.com/delsurlaboratorio"
        >
          <i className="bi bi-facebook"></i>
        </motion.a>
        <motion.a
          {...textVariants}
          target="blank"
          href="https://www.linkedin.com/in/lab-santa-b%C3%A1rbara-an%C3%A1lisis-cl%C3%ADnicos-2851a330b/"
        >
          <i className="bi bi-linkedin"></i>
        </motion.a>
        <motion.a
          {...textVariants}
          target="blank"
          href="https://www.instagram.com/laboratorio_santa_barbara/"
        >
          <i className="bi bi-instagram"></i>
        </motion.a>
      </div>
      <motion.div {...textVariants} className="right">
        <i className="bi bi-telephone"></i>
        <p>4232-3412 / 4295-4444</p>
      </motion.div>
    </div>
  );
}

export default Header;
