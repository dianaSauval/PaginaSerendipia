import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./header.css";
import { Button, Fade } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useTranslation } from "react-i18next";

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
        <LinkScroll smooth={true} offset={-80} to="banner">
          <Button variant="outlined">{t("home")}</Button>
        </LinkScroll>
        <LinkScroll smooth={true} offset={-90} to="about">
          <Button variant="outlined">{t("about")}</Button>
        </LinkScroll>
        <LinkScroll smooth={true} offset={-70} to="videos">
          <Button variant="outlined">{t("videos")}</Button>
        </LinkScroll>
        <LinkScroll smooth={true} offset={-70} to="photos">
          <Button variant="outlined">{t("photos")}</Button>
        </LinkScroll>
        <LinkScroll smooth={true} offset={-60} to="contact">
          <Button variant="outlined">{t("contact")}</Button>
        </LinkScroll>
      </div>
      <div className="languageAndNetworks">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          id="listLanguage"
        >
          <ListItemButton className="divLanguage" onClick={handleClick}>
            <ListItemIcon className="iconLanguage">
              <LanguageOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={t("language")} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Fade in={open} mountOnEnter unmountOnExit>
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
          <NavLink
            to="https://www.instagram.com/un.duo.serendipia"
            target="_blank"
          >
            <InstagramIcon />
          </NavLink>
          <NavLink
            to="https://www.youtube.com/channel/UCp-fAGAGlR9Qfv8dfUER4Rg"
            target="_blank"
          >
            <YouTubeIcon sx={{ fontSize: 30 }} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
