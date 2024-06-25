import "../styles/_preguntasFrecuentes.scss";

function Indicaciones({ searchTerm }) {
  const indicaciones = [
    {
      pregunta: "¿Cuántas horas de ayuno necesito?",
      respuesta:
        "12 hs. de ayuno para analizar colesterol total, HDL, LDL, triglicéridos o hepatograma.\n8 hs. de ayuno para otros análisis.\nPara cortisol y curva de glucemia, la extracción debe realizarse entre las 7:30 y las 8:00 AM con 8 hs de ayuno.\nPara prolactina, 8 hs de ayuno y concurrir al laboratorio 2 horas después de levantarse, sin esfuerzo ni actividad física, a menos que su médico/a indique otra preparación.",
    },
    {
      pregunta: "¿Cómo hacer la recolección de una orina de 24 horas?",
      respuesta:
        "Debe descartar la primera orina, luego recolectar todas las restantes durante 24 horas hasta la primera del día siguiente inclusive.\nLa misma debe recolectarse en botellas de agua mineral y mantenerse refrigerada durante la recolección (2-8°C).\nRecuerde que es indispensable contar con el total de la orina recolectada en ese período.",
    },
    {
      pregunta: "¿Cómo recolectar la muestra de orina completa?",
      respuesta:
        "Para recolectar la muestra de sedimento u orina completa utilice un envase limpio con tapa y recolecte la primera orina de la mañana o, en su defecto, una orina con una retención mayor a 3 hs.",
    },
    {
      pregunta:
        "¿Cuál es la preparación y la muestra para sangre oculta en materia fecal?",
      respuesta:
        "Durante tres días consecutivos, el/la paciente evitará comer carne roja y alimentos que contengan sangre.\nDeberá evitar rábanos, nabos y cacao.\nLos analgésicos y antirreumáticos no son aconsejables durante estos tres días.\nAl cuarto día, recolectar en un frasco de boca ancha bien limpio y seco una porción de una deposición espontánea (no recolectar orina).\nAclarar si el paciente sufre de hemorroides.\nRotular con nombre y apellido.\nSi lo desea, podrá retirar el frasco en el laboratorio presentando la orden médica del/la paciente.",
    },
    {
      pregunta:
        "¿Cuáles son las indicaciones para el análisis bacteriológico de orina? (Urocultivo)",
      respuesta:
        "Instrucciones urocultivo mujeres:\nRecolectar la primera orina de la mañana o, en su defecto, la orina con una retención no menor a tres horas.\na) Practicar un cuidadoso lavado de la zona genital con abundante agua y jabón.\nb) Secar con una toalla limpia y planchada, o con toallitas descartables.\nc) Taponar el orificio vaginal con algodón o con un tampón vaginal.\nd) Separar los labios y orinar desechando el primer chorro de la micción.\ne) Recolectar la porción media de la micción en un frasco estéril.\nf) Tapar el frasco, rotular con nombre y apellido.\nGuardar en la heladera hasta su envío al laboratorio.\n\nInstrucciones urocultivo hombres:\nRecolectar la primera orina de la mañana o, en su defecto, la orina con una retención no menor a tres horas.\na) Practicar un cuidadoso lavado del pene con abundante agua y jabón.\nb) Secar con una toalla limpia y planchada, o con toallitas descartables.\nc) Rebatir el prepucio y orinar desechando el primer chorro de la micción.\nd) Recolectar la porción media de la micción en un frasco estéril.\ne) Tapar el frasco, rotular con nombre y apellido.\nGuardar en la heladera hasta su envío al laboratorio.\n\nBebés, niños y/o adultos que no controlan esfínteres:\nRecolectar la primera orina de la mañana o, en su defecto, con retención de 3 hs como mínimo en un frasco estéril de boca ancha comprado en farmacia.\nIndicaciones:\n1) Higienizar sus genitales con abundante agua y jabón.\n2) Enjuagar bien toda la zona.\n3) Recolectar orina al acecho en frasco estéril (una sola micción, no importa que la cantidad sea escasa).\nTapar inmediatamente el frasco y conservar en heladera.\nRemitir al laboratorio el frasco (con datos del paciente).",
    },
    {
      pregunta:
        "¿Cuáles son las indicaciones para realizarme un análisis de Antígeno Prostático Específico (PSA)?",
      respuesta:
        "Ayuno de 8 hs. (si tiene otros estudios como hepatograma o colesteroles considere que esto puede modificarse).\nAbstinencia sexual al menos 48 hs. previas a la extracción.\nNo haberse realizado en la semana previa tacto rectal, ecografía transrectal o biopsia.\nNo haber realizado ejercicios sentado (como andar en bicicleta o a caballo) al menos 48 hs. previas a la extracción.",
    },
    {
      pregunta:
        "¿Cuáles son las indicaciones para realizarme un cultivo de flujo?",
      respuesta:
        "Durante las 72 hs. anteriores al estudio:\nno tomar antibióticos, no colocarse ningún tipo de crema, talco, óvulos, etc., no mantener relaciones sexuales, no realizarse ecografías transvaginales, no estar menstruando.\nEl día del estudio: no utilizar bidet.\nHorario: de 7:30 a 10:30 hs.",
    },
    {
      pregunta: "¿Cuáles son las indicaciones para un estudio micológico?",
      respuesta:
        "Micológico de uñas:\nSuspender medicación antimicótica, por lo menos 10 días antes de la recolección.\nNo se debe utilizar esmalte, talco, crema, aerosol, desinfectante, loción, etc. sobre la lesión por lo menos 3 días antes de la toma de muestra.\nDurante los 3 días previos a la toma, cepillar sus uñas con agua y jabón blanco por encima y por debajo de la lámina ungueal, al menos 3 veces al día.\nEvitar cortarlas desde la semana previa.\nUn día antes, hacer 3 baños con agua y sal.\nPreparar con una cuchara sopera de sal fina en un litro de agua previamente hervida y entibiada.\nImportante: si la lesión es en los pies, concurrir con calzado cerrado y medias.\n\nMicológico de lesiones en piel o cuero cabelludo:\nSuspender medicación antimicótica, por lo menos 10 días antes de la recolección.\nNo utilizar talco, crema, aerosol, desinfectante, loción, etc. sobre la lesión por lo menos 3 días antes de la toma de muestra.\nLavar la zona lesionada con jabón blanco o neutro, por lo menos 3 veces al día durante los 3 días previos a la toma de muestra.\nImportante: si la lesión es en los pies, concurrir con calzado cerrado y medias.",
    },
    {
      pregunta:
        "¿Debo dejar de tomar mi medicación habitual para realizar los estudios?",
      respuesta:
        "Si la medicación que toma es para las tiroides y le piden estudios para el dosaje de las mismas debe tomar la medicación del día luego de la extracción.\nEn caso de que tome otras medicaciones consulte con su médica/o cómo proceder.",
    },
    {
      pregunta:
        "Me indicaron un análisis parasitológico o de coprocultivo, ¿Dónde debo retirar el material? ¿Cuáles son las indicaciones?",
      respuesta:
        "Deberá presentarse en el Laboratorio con la orden médica correspondiente.\nLas indicaciones específicas para la recolección de la muestra le serán proporcionadas junto con el material que necesitará para realizarla.",
    },
  ];

  const normalizeString = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const filteredPreguntasRespuestas = indicaciones.filter(
    (item) =>
      normalizeString(item.pregunta).includes(normalizeString(searchTerm)) ||
      normalizeString(item.respuesta).includes(normalizeString(searchTerm))
  );

  return (
    <div className="preguntas-frecuentes">
      {filteredPreguntasRespuestas.map((item, index) => (
        <div key={index}>
          <div className="preguntas-flex">
            <h4>{item.pregunta}</h4>
            <p>{item.respuesta}</p>
          </div>
          <div className="linea"></div>
        </div>
      ))}
    </div>
  );
}

export default Indicaciones;
