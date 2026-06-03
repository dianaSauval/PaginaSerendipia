import { useTranslation } from "react-i18next";
import "./footer.css";

export default function Footer() {
  const { t } = useTranslation(["global"]);

  return (
    <footer className="footer">
      <div className="footerGlow" />

      <div className="footerContent">
        <div className="footerBrand">
          <h3>Dúo Serendipia</h3>

          <p>
            {t("footer.tagline")}
          </p>
        </div>

        <div className="footerBottom">
          <p>
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>

          <a
            href="https://dianasauvaldigital.com.ar/"
            target="_blank"
            rel="noreferrer"
            className="developerLink"
          >
            {t("footer.developer")}
          </a>
        </div>
      </div>
    </footer>
  );
}