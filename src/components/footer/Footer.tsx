import { CSSProperties, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./footer.css";

type FooterSpark = {
  id: number;
  x: number;
  y: number;
  size: number;
  driftX: number;
  driftY: number;
  color: "turquoise" | "gold";
};

type SparkStyle = CSSProperties & {
  "--drift-x": string;
  "--drift-y": string;
};

export default function Footer() {
  const { t } = useTranslation(["global"]);
  const [footerSparks, setFooterSparks] = useState<FooterSpark[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const angle = Math.random() * Math.PI * 2;

      const startRadius = 34;
      const distance = 22 + Math.random() * 32;

      const startX = 50 + Math.cos(angle) * startRadius;
      const startY = 50 + Math.sin(angle) * startRadius;

      const driftX = Math.cos(angle) * distance;
      const driftY = Math.sin(angle) * distance;

      const newSpark: FooterSpark = {
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
    <footer className="footer">
      <div className="footerGlow" />

      <div className="footerContent">
        <div className="footerBrand">
          <div className="footerLogoWrap">
            <img
              src="/logo-fondo-transparente.png"
              alt="Dúo Serendipia"
              className="footerLogo"
            />

            <div className="footerSparksLayer">
              {footerSparks.map((spark) => (
                <span
                  key={spark.id}
                  className={`footerSpark ${spark.color}`}
                  style={
                    {
                      left: `${spark.x}%`,
                      top: `${spark.y}%`,
                      width: `${spark.size}px`,
                      height: `${spark.size}px`,
                      "--drift-x": `${spark.driftX}px`,
                      "--drift-y": `${spark.driftY}px`,
                    } as SparkStyle
                  }
                />
              ))}
            </div>
          </div>

          <div className="divider" />

          <p>{t("footer.tagline")}</p>
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
