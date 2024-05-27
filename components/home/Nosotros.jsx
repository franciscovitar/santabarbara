"use client";

import Image from "next/image";
import React from "react";
import nosotros from "../../Images/fachada.jpg";
import "../styles/_nosotros.scss";
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

const imageVariants = {
  viewport: { once: true },
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function Nosotros() {
  return (
    <div id="nosotros" className="nosotros-container">
      <motion.div {...textVariants} className="titulo">
        <span>NOSOTROS</span>
        <h3>Calidad, responsabilidad y profesionalismo desde 19…</h3>
      </motion.div>

      <div className="texto">
        <div className="parrafos">
          <motion.p {...textVariants}>
            Desde <strong>1996</strong>, somos el{" "}
            <strong>laboratorio de análisis clínicos y microbiología</strong>{" "}
            referente en la zona.
          </motion.p>
          <motion.p {...textVariants}>
            Santa Bárbara creció bajo la <strong>Dirección técnica</strong> del{" "}
            <strong>Dr. Ramón Bañón Tortosa</strong> y en la actualidad continúa
            prestando los mismos <strong>servicios de calidad</strong> con la{" "}
            <strong>Codirección Técnica</strong> de las{" "}
            <strong>Dra. Delia Martínez</strong> y{" "}
            <strong>Alejandra Carreras Cafora</strong>.
          </motion.p>
          <motion.p {...textVariants}>
            Nos guía un profundo <strong>compromiso con la salud</strong> de
            nuestros pacientes y por eso cuidamos la{" "}
            <strong>calidez en la atención</strong> y nuestra{" "}
            <strong>ética profesional</strong>.
          </motion.p>
          <motion.p {...textVariants}>
            Conformamos un <strong>grupo humano</strong> de trabajo calificado
            que brinda un <strong>servicio de salud de excelencia</strong>,
            mediante la entrega de{" "}
            <strong>informes con resultados confiables</strong> y de calidad
            para nuestros pacientes y los profesionales de la salud.
          </motion.p>
          <motion.p {...textVariants}>
            Brindamos <strong>atención personalizada</strong>, en tiempo
            oportuno, procurando satisfacer las necesidades de nuestros
            pacientes, con la incorporación de <strong>innovación</strong> y la
            mejora en la <strong>tecnología aplicada</strong> a nuestros
            procesos.
          </motion.p>
        </div>
        <motion.div {...imageVariants} className="imagen">
          <Image src={nosotros} />
        </motion.div>
      </div>
    </div>
  );
}

export default Nosotros;
