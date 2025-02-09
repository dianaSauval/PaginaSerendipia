import React, { useState } from "react";
import { Button, Popover, List, ListItemButton, ListItemText, Typography, useMediaQuery } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { NavLink } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import MenuDrawer from "../menu/MenuBurger";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const { t, i18n } = useTranslation(["global"]);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg")); // Detecta si es pantalla grande (>1080px)

  // Estado para el menú de idiomas
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#0b0c10",
        color: "#3ecbc4",
        position: "fixed",
        top: 0,
        zIndex: 999,
        padding: isDesktop ? "8px 40px" : "8px 20px",
      }}
    >
      {/* Título a la izquierda */}
      <Typography
        variant="h1"
        sx={{
          color: "#00faf1",
          fontSize: isDesktop ? "4rem" : "2.5rem",
        }}
      >
        Dúo Serendipia
      </Typography>

      {/* Menú hamburguesa (solo en pantallas pequeñas, a la derecha) */}
      {!isDesktop && <MenuDrawer />}

      {/* Contenido visible SOLO en pantallas grandes */}
      {isDesktop && (
        <>
          {/* Navegación centrada con desplazamiento suave */}
          <div style={{ display: "flex", gap: "10px", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <LinkScroll to="banner" smooth={true} offset={-80} duration={500}>
              <Button component="span" variant="outlined">{t("home")}</Button>
            </LinkScroll>
            <LinkScroll to="about" smooth={true} offset={-90} duration={500}>
              <Button component="span" variant="outlined">{t("about")}</Button>
            </LinkScroll>
            <LinkScroll to="videos" smooth={true} offset={-65} duration={500}>
              <Button component="span" variant="outlined">{t("videos")}</Button>
            </LinkScroll>
            <LinkScroll to="photos" smooth={true} offset={-70} duration={500}>
              <Button component="span" variant="outlined">{t("photos")}</Button>
            </LinkScroll>
            <LinkScroll to="contact" smooth={true} offset={-65} duration={500}>
              <Button component="span" variant="outlined">{t("contact")}</Button>
            </LinkScroll>
          </div>

          {/* Selector de idioma y redes sociales alineados a la derecha */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {/* Selector de idioma */}
            <Button
              onClick={handleClick}
              sx={{
                color: "#3ecbc4",
                textTransform: "none",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "5px",
                minWidth: "auto",
              }}
            >
              <LanguageOutlinedIcon />
              {t("language")} {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Button>

            {/* Menú de idiomas con Popover */}
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{ mt: 1 }} // Para separar un poco el menú del botón
            >
          
              <List component="nav" sx={{ bgcolor: "background.paper" , width:"145px"}}>
                <ListItemButton onClick={() => changeLanguage("en")}>
                  <ListItemText primary={t("english")} />
                </ListItemButton>
                <ListItemButton onClick={() => changeLanguage("es")}>
                  <ListItemText primary={t("spanish")} />
                </ListItemButton>
              </List>
            </Popover>

            {/* Redes Sociales */}
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <NavLink
                to="https://www.instagram.com/un.duo.serendipia"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  color: "#3ecbc4",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00faf1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3ecbc4")}
              >
                <InstagramIcon sx={{ fontSize: 30 }} />
              </NavLink>
              <NavLink
                to="https://www.youtube.com/channel/UCp-fAGAGlR9Qfv8dfUER4Rg"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  color: "#3ecbc4",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00faf1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3ecbc4")}
              >
                <YouTubeIcon sx={{ fontSize: 30 }} />
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
