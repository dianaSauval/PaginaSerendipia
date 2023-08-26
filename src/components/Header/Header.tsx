import React from "react";
import { useTranslation } from "react-i18next";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Divider from '@mui/material/Divider';
import "./header.css";
import { Button, Fade, Grow } from "@mui/material";

function Header() {
  const { t, i18n } = useTranslation(["global"]);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const changeLanguageEnglish = () => {
    handleClick();
    i18n.changeLanguage(`en`);
  };

  const changeLanguageSpanish = () => {
    handleClick();
    i18n.changeLanguage(`es`);
  };

  return (
    <div className="header">
      <h1>Dúo Serendipia</h1>
      <div className="buttons">
        <Button variant="outlined">{t("home")}</Button>
        <Button variant="outlined">{t("about")}</Button>
        <Button variant="outlined">{t("photos")}</Button>
        <Button variant="outlined">{t("videos")}</Button>
        <Button variant="outlined">{t("contact")}</Button>
      </div>
      <div className="languageAndNetworks">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          id="listLanguage"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon className="iconLanguage">
              <LanguageOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={t("language")} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Fade  in={open} mountOnEnter unmountOnExit>
            <List component="div" disablePadding className="listOptions">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText
                  className="options"
                  primary={t("english")}
                  onClick={changeLanguageEnglish}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText
                  className="options"
                  primary={t("spanish")}
                  onClick={changeLanguageSpanish}
                />
              </ListItemButton>
            </List>
          </Fade>
        </List>
        <div className="networks">
          <InstagramIcon />
          <YouTubeIcon sx={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
