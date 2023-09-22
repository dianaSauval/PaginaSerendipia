import React from "react";
import { Element } from "react-scroll";
import "./contact.css";
import { useTranslation } from "react-i18next";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { NavLink } from "react-router-dom";

export default function ContactSection() {
  const { t, i18n } = useTranslation(["global"]);
  return (
    <Element name="contact" className="contactSection">
      <h1>{t("contactSection.title")}</h1>
      <div className="bodycontact">
        <div className="info">
        <h2>{t("contactSection.recruitment")}</h2>
        <div className="mail">
          <MailOutlineIcon sx={{ fontSize: 40 }} />
          <p>dianasauval@hotmail.com</p>
        </div>
        <div className="mail">
          <PhoneIphoneIcon sx={{ fontSize: 40 }} />
          <p>+54 9 11 5939-2983</p>
        </div> 
        </div>
        <div className="networks">
          <ul>
            <li>
              <NavLink
                to="https://www.facebook.com/diana.sauval/"
                target="_blank"
              >
                <FacebookOutlinedIcon sx={{ fontSize: 40 }} className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.instagram.com/un.duo.serendipia"
                target="_blank"
              >
                <InstagramIcon sx={{ fontSize: 40 }} className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.youtube.com/watch?v=24RFZMiOuS4&list=PLfxSc-Ru8-pPkb6-2sDzGSrAbnFD21r0e"
                target="_blank"
              >
                <YouTubeIcon sx={{ fontSize: 40 }} className="icon" />
              </NavLink>
            </li>
          </ul>
        </div>               
      </div>
    </Element>
  );
}
