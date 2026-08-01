import React from "react";
import "./SectionTitle.css";

type SectionTitleProps = {
  number: string;
  children: React.ReactNode;
  centered?: boolean;
};

const SectionTitle = ({
  number,
  children,
  centered = false,
}: SectionTitleProps) => {
  return (
    <div
      className={`cv-section-title ${
        centered ? "cv-section-title--centered" : ""
      }`}
    >
      <span className="cv-section-number">{number}</span>

      <span className="cv-section-circle" aria-hidden="true">
        <span />
      </span>

      <h2>{children}</h2>

      <span className="cv-section-line" aria-hidden="true" />
    </div>
  );
};

export default SectionTitle;
