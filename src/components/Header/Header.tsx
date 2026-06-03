import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useTranslation } from "react-i18next";

import { FaInstagram, FaYoutube } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import MenuDrawer from "../menu/MenuBurger";

import "./header.css";

export default function Header() {
  const { t, i18n } = useTranslation(["global"]);
  const [languageOpen, setLanguageOpen] = useState(false);

  const changeLanguage = (lang: "es" | "en") => {
    i18n.changeLanguage(lang);
    setLanguageOpen(false);
  };

  const navItems = [
    { label: t("header.nav.home"), target: "banner", offset: -80 },
    { label: t("header.nav.about"), target: "about", offset: -90 },
    { label: t("header.nav.videos"), target: "videos", offset: -70 },
    { label: t("header.nav.photos"), target: "photos", offset: -80 },
    { label: t("header.nav.contact"), target: "contact", offset: -80 },
  ];

  const currentLang = i18n.language === "es" ? "es" : "en";

  const flags = {
    en: "/flags/en.png",
    es: "/flags/es.png",
  };

  return (
    <header className="site-header">
      <div className="header-bg-logo" />

      <div className="header-brand">
        <img
          src="/logo-fondo-transparente.png"
          alt={t("header.brandAlt")}
          className="header-symbol"
        />

        <div className="brand-text">
          <div className="brand-top">
            <span />
            <p>DÚO</p>
            <span />
          </div>

          <h1>SERENDIPIA</h1>
        </div>
      </div>

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
            aria-label="Instagram"
          >
            <FaInstagram />
          </NavLink>

          <NavLink
            to="https://www.youtube.com/channel/UCp-fAGAGlR9Qfv8dfUER4Rg"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="YouTube"
          >
            <FaYoutube />
          </NavLink>
        </div>

        <LinkScroll to="contact" smooth offset={-80} duration={500}>
          <button className="booking-button">
            {t("header.actions.bookUs")}
          </button>
        </LinkScroll>

        <div className="language-wrapper">
          <button
            className="language-button"
            onClick={() => setLanguageOpen(!languageOpen)}
            aria-label={t("header.language.label")}
          >
            <img
              src={flags[currentLang]}
              alt={
                currentLang === "es"
                  ? t("header.language.spanish")
                  : t("header.language.english")
              }
              className="language-flag"
            />

            <span>{currentLang.toUpperCase()}</span>

            {languageOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>

          {languageOpen && (
            <div className="language-menu">
              <button onClick={() => changeLanguage("en")}>
                <img
                  src="/flags/en.png"
                  alt={t("header.language.english")}
                  className="language-menu-flag"
                />
                {t("header.language.english")}
              </button>

              <button onClick={() => changeLanguage("es")}>
                <img
                  src="/flags/es.png"
                  alt={t("header.language.spanish")}
                  className="language-menu-flag"
                />
                {t("header.language.spanish")}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mobile-menu-wrapper">
        <MenuDrawer />
      </div>
    </header>
  );
}