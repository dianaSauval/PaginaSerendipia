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
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 25 50"
                    fill="#262626"
                    id="tiktok"             
                  >
                    <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 12 7 L 12 14 C 12 14.56503 11.56503 15 11 15 C 10.43497 15 10 14.56503 10 14 C 10 13.43497 10.43497 13 11 13 L 11 11 C 9.3550302 11 8 12.35503 8 14 C 8 15.64497 9.3550302 17 11 17 C 12.64497 17 14 15.64497 14 14 L 14 10.232422 C 14.616148 10.671342 15.259118 11 16 11 L 16 9 C 15.952667 9 15.262674 8.7809373 14.78125 8.3613281 C 14.299826 7.941719 14 7.4149911 14 7 L 12 7 z"></path>
                  </svg>
                </div>
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
