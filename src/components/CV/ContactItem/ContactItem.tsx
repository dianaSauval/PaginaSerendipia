import React from "react";
import "./ContactItem.css";

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  href?: string;
};

const ContactItem = ({ icon, label, children, href }: ContactItemProps) => {
  return (
    <div className="cv-contact-item">
      <span className="cv-contact-icon-wrapper">{icon}</span>

      <div className="cv-contact-copy">
        <span className="cv-contact-label">{label}</span>

        {href ? (
          <a href={href} target="_blank" rel="noreferrer">
            {children}
          </a>
        ) : (
          <span className="cv-contact-value">{children}</span>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
