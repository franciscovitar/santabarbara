"use client";

import React from "react";
import "../styles/_preguntas.scss";

import { motion } from "framer-motion";

const imageVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function Preguntas() {
  return (
    <div id="preguntas" className="preguntas">
      <motion.div {...imageVariants} className="titulo">
        <h3>Preguntas Frecuentes</h3>
        <a target="blank" href="/preguntas-frecuentes">
          Ver todas
        </a>
      </motion.div>
      <div className="linea"></div>
      <div className="texto-preguntas">
        <motion.div {...imageVariants}>
          <h5>¿Cómo obtener mis resultados?</h5>
          <p>
            Puede retirar sus resultados de lunes a viernes de 14:00 a 18:00
            hs., sábados de 10:00 a 13:00 hs. o bien descargarlos a través del
            portal en cualquier momento.
          </p>
        </motion.div>
        <motion.div {...imageVariants}>
          <h5>¿Cómo solicito un servicio a domicilio?</h5>
          <p>
            Lo puede solicitar a nuestro asistente virtual haciendo click{" "}
            <a href="https://api.whatsapp.com/send/?phone=541132679819&text&type=phone_number&app_absent=0">
              aquí
            </a>
            .
          </p>
        </motion.div>
      </div>
      <div className="texto-preguntas">
        <motion.div {...imageVariants}>
          <h5>¿Cuáles son los horarios de atención y la ubicación?</h5>
          <p>
            Atendemos de lunes a viernes de 7:30 a 18:00 hs y sábados de 7:30 a
            13:00 hs.
            <br /> Las extracciones son hasta las 10:30 hs.
            <br /> Estamos en Margarita Weild 1200, Lanús Este, Prov. de Buenos
            Aires
          </p>
        </motion.div>
        <motion.div {...imageVariants}>
          <h5>¿Cuántas horas de ayuno necesito?</h5>
          <p>
            12 hs. de ayuno, cuando se analice: colesterol total, HDL, LDL,
            triglicéridos o hepatograma.
            <br />8 hs. de ayuno para el resto de los análisis.
            <br />
            Cortisol y curva de glucemia: La extracción debe realizarse entre
            las 7:30 y las 8:00 AM con 8 hs de ayuno.a
            <br />
            Prolactina: 8 hs de ayuno y concurrir al laboratorio con 2 horas de
            haberse levantado, sin haber hecho esfuerzo ni actividad física
            excepto que su médico/a le haya indicado otra preparación
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Preguntas;
