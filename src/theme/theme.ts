import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#DDB873",
      light: "#F2D7A1",
      dark: "#B88A42",
      contrastText: "#030303",
    },

    secondary: {
      main: "#12D6D0",
      light: "#7BE7E3",
      dark: "#0B8F95",
      contrastText: "#030303",
    },

    background: {
      default: "#030303",
      paper: "#0D0D0D",
    },

    text: {
      primary: "#F5E8C9",
      secondary: "#D6C9A7",
    },

    divider: "rgba(221, 184, 115, 0.25)",
  },

  typography: {
    fontFamily: "'Montserrat', sans-serif",

    h1: {
      fontFamily: "'Cinzel', serif",
      fontSize: "clamp(3rem, 7vw, 7rem)",
      fontWeight: 500,
      letterSpacing: "3px",
      color: "#DDB873",
    },

    h2: {
      fontFamily: "'Cinzel', serif",
      fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
      fontWeight: 500,
      letterSpacing: "2px",
      color: "#DDB873",
    },

    h3: {
      fontFamily: "'Cinzel', serif",
      fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
      fontWeight: 500,
      letterSpacing: "2px",
      color: "#DDB873",
    },

    h4: {
      fontFamily: "'Cinzel', serif",
      fontSize: "2rem",
      fontWeight: 500,
      color: "#DDB873",
    },

    h5: {
      fontFamily: "'Cinzel', serif",
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#DDB873",
    },

    h6: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "1rem",
      fontWeight: 600,
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#12D6D0",
    },

    body1: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "1rem",
      lineHeight: 1.8,
      color: "#D6C9A7",
    },

    body2: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "0.95rem",
      lineHeight: 1.7,
      color: "#B9AE92",
    },

    button: {
      fontFamily: "'Montserrat', sans-serif",
      textTransform: "uppercase",
      fontWeight: 600,
      fontSize: "0.9rem",
      letterSpacing: "1.5px",
    },
  },

  shape: {
    borderRadius: 18,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle at top left, rgba(18, 214, 208, 0.12), transparent 35%), radial-gradient(circle at bottom right, rgba(221, 184, 115, 0.12), transparent 35%), #030303",
          color: "#F5E8C9",
          overflowX: "hidden",
        },

        a: {
          color: "inherit",
          textDecoration: "none",
        },

        "::selection": {
          backgroundColor: "rgba(221, 184, 115, 0.35)",
          color: "#FFFFFF",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "999px",
          padding: "12px 28px",
          transition: "all 0.3s ease",
        },

        containedPrimary: {
          background:
            "linear-gradient(135deg, #B88A42 0%, #F2D7A1 45%, #DDB873 100%)",
          color: "#030303",
          boxShadow: "0 0 24px rgba(221, 184, 115, 0.28)",

          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 0 34px rgba(221, 184, 115, 0.42)",
            background:
              "linear-gradient(135deg, #DDB873 0%, #F2D7A1 50%, #B88A42 100%)",
          },
        },

        outlinedPrimary: {
          borderColor: "rgba(221, 184, 115, 0.65)",
          color: "#DDB873",

          "&:hover": {
            borderColor: "#F2D7A1",
            backgroundColor: "rgba(221, 184, 115, 0.08)",
            boxShadow: "0 0 24px rgba(221, 184, 115, 0.25)",
          },
        },

        outlinedSecondary: {
          borderColor: "rgba(18, 214, 208, 0.65)",
          color: "#12D6D0",

          "&:hover": {
            borderColor: "#7BE7E3",
            backgroundColor: "rgba(18, 214, 208, 0.08)",
            boxShadow: "0 0 24px rgba(18, 214, 208, 0.25)",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(13, 13, 13, 0.88)",
          backgroundImage: "none",
          border: "1px solid rgba(221, 184, 115, 0.22)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.55)",
          backdropFilter: "blur(12px)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.035)",
          border: "1px solid rgba(221, 184, 115, 0.22)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.45)",
          backdropFilter: "blur(12px)",
        },
      },
    },

    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.95rem",
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "#DDB873",
        },

        secondary: {
          color: "#D6C9A7",
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "14px",
          color: "#DDB873",
          transition: "all 0.3s ease",

          "&:hover": {
            backgroundColor: "rgba(221, 184, 115, 0.08)",
            color: "#F2D7A1",
          },

          "&.Mui-selected": {
            backgroundColor: "rgba(18, 214, 208, 0.12)",
            color: "#12D6D0",

            "&:hover": {
              backgroundColor: "rgba(18, 214, 208, 0.18)",
            },
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#DDB873",
          transition: "all 0.3s ease",

          "&:hover": {
            color: "#12D6D0",
            backgroundColor: "rgba(18, 214, 208, 0.08)",
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
  },
});

export default theme;