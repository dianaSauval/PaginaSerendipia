import { useTranslation } from "react-i18next";
import "./footer.css";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  const { t, i18n } = useTranslation(["global"]);
  return (
    <>
      <div className="footer">
        <p>© 2023 Duo Serendipia | Sitio Web desarrollado por Diana Sauval</p>
      </div>
    </>
  );
}
