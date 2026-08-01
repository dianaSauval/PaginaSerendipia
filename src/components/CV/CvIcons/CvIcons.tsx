import React from "react";
import "./CvIcons.css";

type IconProps = {
  className?: string;
};

export const LocationIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`cv-icon ${className}`}
  >
    <path
      d="M12 21s7-6.05 7-12a7 7 0 1 0-14 0c0 5.95 7 12 7 12Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle
      cx="12"
      cy="9"
      r="2.4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    />
  </svg>
);

export const EmailIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`cv-icon ${className}`}
  >
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="1.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    />

    <path
      d="m4 7 8 6 8-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PhoneIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`cv-icon ${className}`}
  >
    <path
      d="M8.2 3.8 5.7 5.2c-.8.5-1.2 1.4-1 2.3 1.1 5.8 5.7 10.4 11.5 11.5.9.2 1.8-.2 2.3-1l1.4-2.5c.4-.7.2-1.6-.5-2l-3-1.8c-.7-.4-1.5-.3-2 .3l-1.2 1.4a12.5 12.5 0 0 1-4.8-4.8l1.4-1.2c.6-.5.7-1.3.3-2l-1.8-3c-.5-.7-1.4-.9-2.1-.6Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const WebsiteIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`cv-icon ${className}`}
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />

    <path
      d="M3.5 12h17M12 3c2.2 2.4 3.4 5.4 3.4 9S14.2 18.6 12 21M12 3c-2.2 2.4-3.4 5.4-3.4 9s1.2 6.6 3.4 9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const DownloadIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`cv-icon cv-download-icon ${className}`}
  >
    <path
      d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
