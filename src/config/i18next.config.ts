import i18next from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "es",
    fallbackLng: "es", // Idioma predeterminado
    supportedLngs: ["en", "es"], // Idiomas soportados
    backend: {
      // Ruta relativa donde están los archivos de traducción
      loadPath: '/locales/{{lng}}/global.json',
    },
    interpolation: {
      escapeValue: false, // React ya maneja el escape
    },
    debug: false, // Activa logs para depurar
  });

export default i18next;

