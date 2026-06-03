import React from "react";
import { Element } from "react-scroll";
import "./contact.css";
import { useTranslation } from "react-i18next";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

export default function ContactSection() {
  const { t } = useTranslation(["global"]);

  return (
    <Element name="contact" className="contactSection">
      <div className="contactOverlay">
        <div className="contactContainer">
          <div className="contactHeader">
            <span className="contactEyebrow">
              {t("contactSection.eyebrow")}
            </span>
            <h2>{t("contactSection.title")}</h2>

            <p className="contactSubtitle">{t("contactSection.subtitle")}</p>
            <div className="divider" />
          </div>

          <div className="contactContent">
            <div className="contactCard">
              <h3>{t("contactSection.recruitment")}</h3>

              <p className="contactText">{t("contactSection.description")}</p>

              <div className="contactLinks">
                <a
                  href="mailto:dianasauval@hotmail.com"
                  className="contactLink"
                >
                  <span className="contactIcon">
                    <MailOutlineIcon />
                  </span>
                  <span>
                    <small>{t("contactSection.emailLabel")}</small>
                    dianasauval@hotmail.com
                  </span>
                </a>

                <a
                  href="https://wa.me/5491159392983"
                  target="_blank"
                  rel="noreferrer"
                  className="contactLink"
                >
                  <span className="contactIcon whatsappIcon">
                    <WhatsAppIcon />
                  </span>
                  <span>
                    <small>{t("contactSection.whatsappLabel")}</small>
                    +54 9 11 5939-2983
                  </span>
                </a>
              </div>
            </div>

            <div className="socialCard">
              <h3>{t("contactSection.socialTitle")}</h3>
              <p className="contactText">
                {t("contactSection.socialDescription")}
              </p>

              <SocialNetworks
                tiktok="https://www.tiktok.com/@duo.serendipia"
                instagram="https://www.instagram.com/un.duo.serendipia"
                youtube="https://www.youtube.com/watch?v=24RFZMiOuS4&list=PLfxSc-Ru8-pPkb6-2sDzGSrAbnFD21r0e"
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
