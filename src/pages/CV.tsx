import React, { useState } from "react";
import "./CV.css";
import CvPageOne from "../components/CV/CvPageOne/CvPageOne";
import CvPageTwo from "../components/CV/CvPageTwo/CvPageTwo";
import { DownloadIcon } from "../components/CV/CvIcons/CvIcons";

const REQUIRED_IMAGES = 2;

/*
  Reemplazá esta URL por el enlace directo al PDF alojado en Cloudinary.
  Ejemplo:
  https://res.cloudinary.com/TU_CLOUD/image/upload/v1234567890/Duo%20Serendipia/cv-duo-serendipia.pdf
*/
const MOBILE_PDF_URL =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1785592362/Duo%20Serendipia/D%C3%BAo_Serendipia___Circo_y_Acrobacia_aouhsd.pdf";

const Cv = () => {
  const [loadedImages, setLoadedImages] = useState(0);

  const imagesReady = loadedImages >= REQUIRED_IMAGES;

  const handleImageLoad = () => {
    setLoadedImages((current) => Math.min(current + 1, REQUIRED_IMAGES));
  };

  const handlePrint = async () => {
    if (!imagesReady) return;

    try {
      await document.fonts.ready;
    } finally {
      window.print();
    }
  };

  return (
    <main className="cv-screen">
      <button
        type="button"
        className="cv-download-control cv-download-control--desktop"
        onClick={handlePrint}
        disabled={!imagesReady}
        aria-label="Imprimir o guardar currículum como PDF"
      >
        <DownloadIcon />
        <span>{imagesReady ? "Guardar PDF" : "Cargando CV..."}</span>
      </button>

      <a
        href={MOBILE_PDF_URL}
        target="_blank"
        rel="noreferrer"
        className="cv-download-control cv-download-control--mobile"
        aria-label="Descargar currículum en PDF"
      >
        <DownloadIcon />
        <span>Descargar PDF</span>
      </a>

      <div className="cv-document">
        <div className="cv-page-preview">
          <CvPageOne onImageLoad={handleImageLoad} />
        </div>

        <div className="cv-page-preview">
          <CvPageTwo onImageLoad={handleImageLoad} />
        </div>
      </div>
    </main>
  );
};

export default Cv;
