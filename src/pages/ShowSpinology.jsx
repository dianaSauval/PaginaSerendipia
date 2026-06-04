import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./ShowSpinology.css";

const IMAGES = {
  hero: "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1739114710/Duo%20Serendipia/003_1540-NEF_DxO_DeepPRIME_zllfw1.jpg",
  one: "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1779374929/Duo%20Serendipia/_A7R5543-Enhanced-NR_laycx8.jpg",
  two: "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1779374930/Duo%20Serendipia/_A7R5963-Enhanced-NR_ejqcal.jpg",
  three:
    "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1779374931/Duo%20Serendipia/_A7R6145-Enhanced-NR_j2ieoh.jpg",
  four: "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1779374930/Duo%20Serendipia/_A7R5634-Enhanced-NR_xqvvxl.jpg",
  five: "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1779376026/Duo%20Serendipia/Joseydianabaja_23_de_35_v8lk26.jpg",
  six: "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1779376246/Duo%20Serendipia/_A7R6220-Enhanced-NR_kyjkzm.jpg",
  seven:
    "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1779376247/Duo%20Serendipia/_A7R5951-Enhanced-NR-2_skudwq.jpg",
};

function ShowSpinology() {
  const { t, i18n } = useTranslation();
  const [footerSparks, setFooterSparks] = useState([]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16 },
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const angle = Math.random() * Math.PI * 2;

      const startRadius = 34;
      const distance = 22 + Math.random() * 32;

      const startX = 50 + Math.cos(angle) * startRadius;
      const startY = 50 + Math.sin(angle) * startRadius;

      const driftX = Math.cos(angle) * distance;
      const driftY = Math.sin(angle) * distance;

      const newSpark = {
        id: Date.now() + Math.random(),
        x: startX,
        y: startY,
        size: 2.5 + Math.random() * 3.5,
        driftX,
        driftY,
        color: Math.random() > 0.45 ? "turquoise" : "gold",
      };

      setFooterSparks((prev) => [...prev.slice(-12), newSpark]);

      setTimeout(() => {
        setFooterSparks((prev) =>
          prev.filter((spark) => spark.id !== newSpark.id),
        );
      }, 1800);
    }, 420);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="spinology-page">
      <section className="spinology-hero">
        <div className="language-switch">
          <button
            type="button"
            onClick={() => changeLanguage("en")}
            className={i18n.language === "en" ? "active" : ""}
          >
            EN
          </button>

          <button
            type="button"
            onClick={() => changeLanguage("es")}
            className={i18n.language === "es" ? "active" : ""}
          >
            ES
          </button>
        </div>

        <div className="spinology-orbit orbit-one"></div>
        <div className="spinology-orbit orbit-two"></div>

        <div className="spinology-hero-image">
          <img src={IMAGES.hero} alt="Spinology circus show" />
        </div>

        <div className="spinology-hero-content">
          <p className="spinology-kicker">{t("showSpinology.kicker")}</p>

          <h1>
            {t("showSpinology.heroTitle1")}
            <span>{t("showSpinology.heroTitle2")}</span>
          </h1>

          <p className="spinology-intro">{t("showSpinology.heroText")}</p>

          <div className="spinology-actions">
            <a
              href="https://buy.stripe.com/dRm9AScCl8bpcM6bfP1ck00"
              target="_blank"
              rel="noreferrer"
              className="spinology-btn primary"
            >
              {t("showSpinology.tipButton")}
            </a>

            <a href="#booking" className="spinology-btn ghost">
              {t("showSpinology.bookButton")}
            </a>
          </div>
        </div>

        <div className="spinology-scroll">{t("showSpinology.scroll")}</div>
      </section>

      <section className="spinology-tip-section reveal">
        <div className="tip-panel">
          <p className="spinology-kicker">{t("showSpinology.supportKicker")}</p>

          <h2>{t("showSpinology.supportTitle")}</h2>

          <p>{t("showSpinology.supportText")}</p>
        </div>

        <div className="tip-options">
          <a
            href="https://buy.stripe.com/dRm9AScCl8bpcM6bfP1ck00"
            target="_blank"
            rel="noreferrer"
          >
            <span>01</span>
            {t("showSpinology.option1")}
          </a>

          <a
            href="https://www.instagram.com/un.duo.serendipia/"
            target="_blank"
            rel="noreferrer"
          >
            <span>02</span>
            {t("showSpinology.option2")}
          </a>

          <a href="#booking">
            <span>03</span>
            {t("showSpinology.option3")}
          </a>
        </div>
      </section>

      <section className="spinology-gallery reveal">
        <div className="gallery-heading">
          <p className="spinology-kicker">{t("showSpinology.galleryKicker")}</p>

          <h2>{t("showSpinology.galleryTitle")}</h2>
        </div>

        <div className="spinology-grid">
          <div className="grid-img tall reveal delay-1">
            <img src={IMAGES.one} alt="Circus performance" />
          </div>

          <div className="grid-img reveal delay-2">
            <img src={IMAGES.seven} alt="Cyr wheel performance" />
          </div>

          <div className="grid-img reveal delay-3">
            <img src={IMAGES.three} alt="Acrobatic duo" />
          </div>

          <div className="grid-img wide reveal delay-4">
            <img src={IMAGES.six} alt="Dúo Serendipia show" />
          </div>
        </div>
      </section>

      <section className="serendipia-section reveal">
        <div className="serendipia-copy">
          <p className="spinology-kicker">{t("showSpinology.hostedBy")}</p>

          <h2>{t("showSpinology.duoTitle")}</h2>

          <p>{t("showSpinology.duoP1")}</p>

          <p>{t("showSpinology.duoP2")}</p>

          <div className="serendipia-links">
            <a
              href="https://duoserendipia.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              {t("showSpinology.website")}
            </a>

            <a
              href="https://www.instagram.com/un.duo.serendipia/"
              target="_blank"
              rel="noreferrer"
            >
              {t("showSpinology.instagram")}
            </a>
          </div>
        </div>

        <div className="serendipia-card">
          <img src={IMAGES.five} alt="Dúo Serendipia" />
        </div>
      </section>

      <section id="booking" className="booking-spinology reveal">
        <p className="spinology-kicker">{t("showSpinology.bookingKicker")}</p>

        <h2>{t("showSpinology.bookingTitle")}</h2>

        <p>{t("showSpinology.bookingText")}</p>

        <a
          href="mailto:dianasauval@hotmail.com?subject=Booking%20Duo%20Serendipia"
          className="spinology-btn primary"
        >
          {t("showSpinology.contactButton")}
        </a>
      </section>
      <footer className="spinology-footer">
        <div className="spinology-footer-glow" />

        <div className="spinology-footer-content">
          <div className="spinology-footer-logo-wrap">
            <img
              src="/logo-fondo-transparente.png"
              alt="Dúo Serendipia"
              className="spinology-footer-logo"
            />

            <div className="spinology-sparks-layer">
              {footerSparks.map((spark) => (
                <span
                  key={spark.id}
                  className={`dynamic-spark ${spark.color}`}
                  style={{
                    left: `${spark.x}%`,
                    top: `${spark.y}%`,
                    width: `${spark.size}px`,
                    height: `${spark.size}px`,
                    "--drift-x": `${spark.driftX}px`,
                    "--drift-y": `${spark.driftY}px`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="spinology-footer-line" />

          <p className="spinology-footer-text">
            © {new Date().getFullYear()} Dúo Serendipia
          </p>

          <a
            href="https://dianasauvaldigital.com.ar/"
            target="_blank"
            rel="noreferrer"
            className="spinology-developer-link"
          >
            Designed & Developed by Diana Sauval
          </a>
        </div>
      </footer>
    </main>
  );
}

export default ShowSpinology;
