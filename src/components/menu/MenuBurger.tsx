import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link as LinkScroll } from "react-scroll";

import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiVideo,
  FiCamera,
  FiMail,
  FiGlobe,
  FiChevronDown,
  FiChevronUp,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";

import "./menuBurger.css";

type Language = "es" | "en";

export default function MenuDrawer() {
  const { t, i18n } = useTranslation(["global"]);

  const [isOpen, setIsOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const currentLang: Language = i18n.language === "es" ? "es" : "en";

  const closeMenu = () => {
    setIsOpen(false);
    setLanguageMenuOpen(false);
  };

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    setLanguageMenuOpen(false);
  };

  const navItems = [
    {
      id: "banner",
      icon: <FiHome />,
      text: t("header.nav.home"),
      offset: -80,
    },
    {
      id: "about",
      icon: <FiUser />,
      text: t("header.nav.about"),
      offset: -90,
    },
    {
      id: "videos",
      icon: <FiVideo />,
      text: t("header.nav.videos"),
      offset: -70,
    },
    {
      id: "photos",
      icon: <FiCamera />,
      text: t("header.nav.photos"),
      offset: -80,
    },
    {
      id: "contact",
      icon: <FiMail />,
      text: t("header.nav.contact"),
      offset: -80,
    },
  ];

  return (
    <>
      <button
        className="mobile-menu-button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <FiMenu />
      </button>

      {isOpen && <div className="mobile-menu-backdrop" onClick={closeMenu} />}

      <aside className={`mobile-drawer ${isOpen ? "is-open" : ""}`}>
        <div className="mobile-drawer-glow" />

        <div className="mobile-drawer-header">
          <div>
            <span className="drawer-eyebrow">Dúo</span>
            <h3>Serendipia</h3>
          </div>

          <button
            className="mobile-close-button"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        <nav className="mobile-nav">
          {navItems.map(({ id, icon, text, offset }) => (
            <LinkScroll
              key={id}
              smooth
              offset={offset}
              to={id}
              duration={500}
              onClick={closeMenu}
              className="mobile-nav-link"
            >
              <span className="mobile-nav-icon">{icon}</span>
              <span>{text}</span>
            </LinkScroll>
          ))}
        </nav>

        <div className="mobile-divider" />

        <div className="mobile-language">
          <button
            className="mobile-language-button"
            onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
          >
            <span className="mobile-nav-icon">
              <FiGlobe />
            </span>

            <span>{t("header.language.label")}</span>

            <strong>{currentLang.toUpperCase()}</strong>

            {languageMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          {languageMenuOpen && (
            <div className="mobile-language-options">
              <button onClick={() => changeLanguage("en")}>
                <img src="/flags/en.png" alt={t("header.language.english")} />
                {t("header.language.english")}
              </button>

              <button onClick={() => changeLanguage("es")}>
                <img src="/flags/es.png" alt={t("header.language.spanish")} />
                {t("header.language.spanish")}
              </button>
            </div>
          )}
        </div>

        <LinkScroll
          to="contact"
          smooth
          offset={-80}
          duration={500}
          onClick={closeMenu}
          className="mobile-booking-button"
        >
          {t("header.actions.bookUs")}
        </LinkScroll>

        <div className="mobile-socials">
          <a
            href="https://www.instagram.com/un.duo.serendipia"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram />
          </a>

          <a
            href="https://www.youtube.com/channel/UCp-fAGAGlR9Qfv8dfUER4Rg"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <FiYoutube />
          </a>
        </div>
      </aside>
    </>
  );
}