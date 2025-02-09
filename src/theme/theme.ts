import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3ecbc4", // Color principal (botones y textos)
      contrastText: "#000", // Contraste para mejor visibilidad
    },
    secondary: {
      main: "#00faf1", // Color para efectos hover o elementos destacados
    },
    background: {
      default: "#0b0c10", // Fondo general
      paper: "#0b0c10", // Fondo de listas y elementos sobre el fondo
    },
    text: {
      primary: "#3ecbc4",
      secondary: "#00faf1",
    },
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
    h1: {
      fontFamily: "'Lovers Quarrel', cursive", // Solo para títulos
      fontSize: "4rem",
      fontWeight: 400, // Regular (el que te gustó)
      color: "#00faf1",
    },
    h2: {
      fontFamily: "'Lovers Quarrel', cursive", // Solo para títulos
      fontSize: "5rem",
      fontWeight: 400, // Regular (el que te gustó)
      color: "black",
    },
    h3: {
      fontFamily: "'Lovers Quarrel', cursive", // Solo para títulos
      fontSize: "4rem",
      fontWeight: 400, // Regular (el que te gustó)
      color: "black",
    },
    h5: {
      fontFamily: "'Lovers Quarrel', cursive", // Solo para títulos
      fontWeight: 400, // Regular (el que te gustó)
      fontSize: "2rem",
      color: "black",
    },
    button: {
      fontFamily: "'Montserrat', sans-serif", // Nueva fuente para los botones
      textTransform: "uppercase",
      fontWeight: 600,
      fontSize: "1rem",
      letterSpacing: "1px",
    },
    body1: {
      color: "black", // 🔹 Se mantiene el color del texto original
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#3ecbc4",
          borderColor: "#3ecbc4",
          "&:hover": {
            color: "#00faf1",
            borderColor: "#00faf1",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "1rem",
          fontWeight: 600,
          textTransform: "uppercase",
          color: "#3ecbc4", // 🔹 Aplica el color verdoso celeste a los textos del menú
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: "#3ecbc4", // 🔹 Asegura que los botones del menú mantengan el color
          "&:hover": {
            backgroundColor: "rgba(51, 219, 210, 0.1)", // 🔹 Agrega un efecto hover suave
          },
        },
      },
    },
    
    
  },
});

export default theme;

