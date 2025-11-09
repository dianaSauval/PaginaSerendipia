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
            <h2>{t("aboutSection.p3")}</h2>
            <ul>
              <li>{t("aboutSection.p12")}</li>
              <li>{t("aboutSection.p11")}</li>
              <li>{t("aboutSection.p4")}</li>
              <li>{t("aboutSection.p5")}</li>
              <li>{t("aboutSection.p6")}</li>
            </ul>
            <h2>{t("aboutSection.p7")}</h2>
            <ul>
              <li>{t("aboutSection.p8")}</li>
              <li>{t("aboutSection.p9")}</li>
              <li>{t("aboutSection.p10")}</li>
            </ul>
            <div className="cv-buttons">
              <a
                href="https://drive.google.com/drive/folders/1inHvbaiao-JCvJhO-OHuYVR7Yht_xsY-?usp=sharing"
                target="_blank"
                className="btn"
              >
                {t("aboutSection.cvButton")}
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
