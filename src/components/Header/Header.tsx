import React, { useState } from "react";
import {
  Button,
  Popover,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { NavLink } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useTranslation } from "react-i18next";

import MenuDrawer from "../menu/MenuBurger";

import "./header.css";

export default function Header() {
  const { t, i18n } = useTranslation(["global"]);
  const isDesktop = useMediaQuery("(min-width: 960px)");

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

  const navItems = [
    { label: t("home"), target: "banner", offset: -80 },
    { label: t("about"), target: "about", offset: -90 },
    { label: t("videos"), target: "videos", offset: -70 },
    { label: t("photos"), target: "photos", offset: -80 },
    { label: t("contact"), target: "contact", offset: -80 },
  ];

  return (
    <header className="site-header">
      <div className="header-brand">
        <p className="brand-kicker">Contemporary Circus Duo</p>

        <p className="brand-title">Dúo Serendipia</p>
      </div>

      {!isDesktop && <MenuDrawer />}

      {isDesktop && (
        <>
          <nav className="header-nav">
            {navItems.map((item) => (
              <LinkScroll
                key={item.target}
                to={item.target}
                smooth
                offset={item.offset}
                duration={500}
              >
                <button className="nav-link">{item.label}</button>
              </LinkScroll>
            ))}
          </nav>

          <div className="header-actions">
            <div className="social-links">
              <NavLink
                to="https://www.instagram.com/un.duo.serendipia"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <InstagramIcon />
              </NavLink>

              <NavLink
                to="https://www.youtube.com/channel/UCp-fAGAGlR9Qfv8dfUER4Rg"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <YouTubeIcon />
              </NavLink>
            </div>

            <LinkScroll to="contact" smooth offset={-80} duration={500}>
              <button className="booking-button">Book us</button>
            </LinkScroll>
             <Button onClick={handleClick} className="language-button">
              <LanguageOutlinedIcon />
              {i18n.language === "es" ? "ES" : "EN"}
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Button>

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
              className="language-popover"
            >
              <List component="nav">
                <ListItemButton onClick={() => changeLanguage("en")}>
                  <ListItemText primary="English" />
                </ListItemButton>

                <ListItemButton onClick={() => changeLanguage("es")}>
                  <ListItemText primary="Español" />
                </ListItemButton>
              </List>
            </Popover>
          </div>
        </>
      )}
    </header>
  );
}
