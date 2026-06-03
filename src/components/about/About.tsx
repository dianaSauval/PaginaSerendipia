import React from "react";
import "./about.css";
import foto from "../img/ACRODUO 31-10-22 26.jpg";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(["global"]);

  const experienceItems = [
    t("aboutSection.p12"),
    t("aboutSection.p11"),
    t("aboutSection.p4"),
    t("aboutSection.p5"),
    t("aboutSection.p6"),
  ];

  const disciplinesItems = [
    t("aboutSection.p8"),
    t("aboutSection.p9"),
    t("aboutSection.p10"),
  ];

  return (
    <Element name="about">
      <section className="about-section">
        <div className="about-glow about-glow-gold" />
        <div className="about-glow about-glow-turquoise" />

        <div className="container about-container">
          <div className="about-content">
            <span className="about-kicker">Dúo Serendipia</span>

            <h1 className="about-title">{t("aboutSection.title")}</h1>

            <div className="divider" />

            <div className="about-text-card">
              <p>{t("aboutSection.p1")}</p>
              <p>{t("aboutSection.p2")}</p>

              <div className="about-block">
                <h2>{t("aboutSection.p3")}</h2>

                <ul className="about-list">
                  {experienceItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="about-block">
                <h2>{t("aboutSection.p7")}</h2>

                <ul className="about-list">
                  {disciplinesItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="about-buttons">
                <a
                  href="https://drive.google.com/drive/folders/1TkPvzXSefRSt8GfsWwOkqrcu3hknaKMp?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-btn"
                >
                  {t("aboutSection.cvButton")}
                </a>
              </div>
            </div>
          </div>

          <div className="about-image-wrapper">
            <div className="about-orbit" />
            <div className="about-image-frame">
              <img src={foto} alt="Dúo Serendipia acrobacia mano a mano" />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;