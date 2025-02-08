import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./config/i18next.config"; // Configuración de i18n
import theme from "./theme/theme"; // Importamos el tema de MUI
import "./index.css"; // Mantiene los estilos personalizados

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Para medir el rendimiento de la app
reportWebVitals();
