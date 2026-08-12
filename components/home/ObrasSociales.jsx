"use client";

import React from "react";
import "../styles/_obrasSociales.scss";
import Image from "next/image";
import Galeno from "../../Images/galeno.png";
import Ioma from "../../Images/ioma.jpeg";
import Medicus from "../../Images/medicus.jpeg";
import Omint from "../../Images/omint.png";
import Osde from "../../Images/osde.png";
import Osdepym from "../../Images/osdepym.jpeg";
import Osmecon from "../../Images/osmecon.jpeg";
import Pami from "../../Images/pami.png";
import Sancor from "../../Images/sancor.png";
import Swiss from "../../Images/swiss_medical.png";
import Uta from "../../Images/servicio_penitenciario.jpg";
import Hominis from "../../Images/hominis.jpeg";
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
  initial: { opacity: 0, scale: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function ObrasSociales({ inicio }) {
  return (
    <div id="coberturas" className="obras-sociales">
      {inicio === "hola" ? (
        <motion.div {...textVariants} className="titulo">
          <h3>Atendemos más de 50 obras sociales</h3>
          <a target="blank" href="/obras-sociales">
            Ver todas
          </a>
        </motion.div>
      ) : null}

      <div className="obras-flex">
        <div className="obra-flex">
          <motion.div {...imageVariants}>
            <Image src={Galeno} alt="Galeno" />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Ioma} alt="IOMA" />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Medicus} alt="Medicus" />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Omint} alt="OMINT" />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Osde} alt="OSDE" />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Hominis} alt="Hominis" />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Osdepym} alt="OSDEPYM" />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Osmecon} alt="OSMECON" />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Pami} alt="PAMI" />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Sancor} alt="Sancor" />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Swiss} alt="Swiss Medical" />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Uta} alt="Servicio Penitenciario" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ObrasSociales;
