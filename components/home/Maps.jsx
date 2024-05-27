"use client";

import React from "react";
import "../styles/_maps.scss";
import Image from "next/image";
import maps from "../../Images/mapa.png";
import { motion } from "framer-motion";

const imageVariants = {
  viewport: { once: true },
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, x: 60 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function Maps() {
  return (
    <div className="maps">
      <motion.div {...imageVariants} className="imagen">
        <a
          target="blank"
          href="https://www.google.com/maps/search/Paso+de+la+Patria+139+J.+M.+Ezeiza,+Provincia+de+Buenos+Aires./@-34.8535094,-58.5196847,19z?hl=es-419&entry=ttu"
        >
          <Image src={maps} />
        </a>
      </motion.div>
      <div className="texto">
        <motion.div {...textVariants} className="iconos">
          <i className="bi bi-telephone"></i>
          <p>4232-3412 / 4295-4444</p>
        </motion.div>
        <motion.div {...textVariants} className="iconos">
          <i className="bi bi-chat-dots"></i>
          <a
            target="blank"
            href="https://api.whatsapp.com/send/?phone=541132679819&text&type=phone_number&app_absent=0"
          >
            <p>11-3267-9819</p>
          </a>
        </motion.div>
        <motion.div {...textVariants} className="iconos">
          <i className="bi bi-envelope"></i>
          <a target="blank" href="mailto:info@laboratoriodelsur.com.ar">
            <p>info@laboratoriodelsur.com.ar</p>
          </a>
        </motion.div>
        <motion.div {...textVariants} className="iconos">
          <i className="bi bi-clock"></i>
          <p>
            Lunes a viernes 7:30 a 18:00 hs / Sábados 8:00 a 13:00 hs.
            <br />
            Extracciones hasta 10:30 hs.
          </p>
        </motion.div>
        <motion.div {...textVariants} className="iconos">
          <i className="bi bi-geo-alt"></i>
          <p>Paso de la Patria 139 J. M. Ezeiza, Provincia de Buenos Aires.</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Maps;
