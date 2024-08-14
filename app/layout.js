import { Karla } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const inter = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800"],
});

export const metadata = {
  title:
    "Santa Barbara | Análisis Clínicos y Microbiológicos de Calidad en Ezeiza",
  description:
    "Santa Barbara ofrece análisis clínicos y microbiológicos de baja, mediana y alta complejidad en Ezeiza. Servicios de hisopados, extracciones a domicilio, resultados online y atención a empresas e instituciones.",
  keywords: [
    "análisis clínicos",
    "análisis microbiológicos",
    "hisopados COVID-19",
    "extracciones a domicilio",
    "resultados online",
    "laboratorio Ezeiza",
    "exámenes pre ocupacionales",
    "servicios de salud",
    "calidad en análisis clínicos",
    "laboratorio microbiología",
    "atención personalizada",
    "test de antígenos",
    "cobertura obras sociales",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
