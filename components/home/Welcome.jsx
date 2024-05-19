"use client";

import React from "react";
import "../styles/_welcome.scss";
import { motion } from "framer-motion";

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function Welcome() {
  return (
    <div id="inicio" className="home-welcome">
      <div className="contenedor">
        <motion.h2 {...textVariants}>
          Reconocidos por nuestra excelencia y calidez humana.
        </motion.h2>
        <motion.p {...textVariants}>
          Nos guían el profesionalismo, la calidad y confiabilidad de nuestros
          resultados y el cuidado en la atención a nuestros pacientes.
        </motion.p>
      </div>
    </div>
  );
}

export default Welcome;
