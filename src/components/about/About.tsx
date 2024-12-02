import React from "react";
import "./about.css";
import foto from "../img/ACRODUO 31-10-22 26.jpg";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(["global"]);

  return (
    <Element name="about">
      <div className="about">
        <div>
          <h1>{t("aboutSection.title")}</h1>
          <div className="text">
            <p>{t("aboutSection.p1")}</p>
            <p>{t("aboutSection.p2")}</p>
            <p>{t("aboutSection.p3")}</p>
            <p>{t("aboutSection.p4")}</p>
            <p>{t("aboutSection.p5")}</p>
            <div className="cv-buttons">
              <a
                href="https://drive.google.com/drive/folders/1inHvbaiao-JCvJhO-OHuYVR7Yht_xsY-?usp=sharing"
                target="_blank"
                className="btn"
              >
                {t("aboutSection.p6")}
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url('" + foto + "')" }}
          className="img"
        />
      </div>
    </Element>
  );
};

export default About;
