import React, { useState } from "react";
import { Box, SwipeableDrawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { Link as LinkScroll } from "react-scroll";

type Anchor = "right";

export default function MenuDrawer() {
  const { t, i18n } = useTranslation(["global"]);
  const [state, setState] = useState({ right: false });
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false); // Estado para mostrar/ocultar idiomas

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event && event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }} // 🔹 Hacemos el menú un poco más ancho para mejor visualización
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Secciones de navegación */}
      <List>
        {[{ id: "banner", icon: <HomeIcon />, text: t("home") },
          { id: "about", icon: <PersonIcon />, text: t("about") },
          { id: "videos", icon: <PlayCircleOutlineIcon />, text: t("videos") },
          { id: "photos", icon: <CameraAltIcon />, text: t("photos") },
          { id: "contact", icon: <MailIcon />, text: t("contact") }].map(({ id, icon, text }) => (
          <ListItem key={id} disablePadding>
            <LinkScroll smooth={true} offset={-80} to={id}>
            <ListItemButton sx={{ width: "100%", color: "#3ecbc4" }}> 
  <ListItemIcon sx={{ color: "#3ecbc4" }}> {icon} </ListItemIcon>
  <ListItemText primary={text} sx={{ color: "#3ecbc4" }} /> 
</ListItemButton>

            </LinkScroll>
          </ListItem>
        ))}
      </List>

      {/* Línea divisoria */}
      <Divider sx={{ my: 1, borderColor: "#3ecbc4" }} />

      {/* Botón para mostrar idiomas */}
      <ListItem disablePadding onClick={() => setLanguageMenuOpen(!languageMenuOpen)}>
        <ListItemButton sx={{ width: "100%" }}>
          <ListItemIcon sx={{ color: "#3ecbc4" }}>
            <LanguageOutlinedIcon />
          </ListItemIcon >
          <ListItemText primary={t("language")} />
          {languageMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
      </ListItem>

      {/* Lista de idiomas (se despliega solo si está abierto) */}
      {languageMenuOpen && (
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => changeLanguage("en")}>
              <ListItemText primary={t("english")} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => changeLanguage("es")}>
              <ListItemText primary={t("spanish")} />
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>
        <MenuIcon sx={{ color: "#33dbd2", fontSize: "40px" }} />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </div>
  );
}
