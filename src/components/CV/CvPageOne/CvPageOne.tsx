import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import DecorativeWheel from "../DecorativeWheel/DecorativeWheel";
import SectionTitle from "../SectionTitle/SectionTitle";
import TimelineItem from "../TimelineItem/TimelineItem";
import {
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  WebsiteIcon,
} from "../CvIcons/CvIcons";
import { CYR_IMAGE, selectedExperience } from "../data/cvData";
import "./CvPageOne.css";

type CvPageOneProps = {
  onImageLoad: () => void;
};

const CvPageOne = ({ onImageLoad }: CvPageOneProps) => (
  <section
    className="cv-page cv-page--one"
    aria-label="Página 1 del currículum artístico"
  >
    <div className="cv-paper-texture" aria-hidden="true" />

    <div className="cv-page-corner cv-page-corner--top-right">
      <span />
      <span />
      <span />
    </div>

    <div className="cv-page-corner cv-page-corner--bottom-left">
      <span />
      <span />
      <span />
    </div>

    <header className="cv-hero">
      <div className="cv-hero-photo-column">
        <div className="cv-photo-frame cv-photo-frame--hero">
          <img
            src={CYR_IMAGE}
            alt="Diana Sauval y José Figueroa realizando un acto de rueda Cyr"
            className="cv-hero-photo"
            onLoad={onImageLoad}
            crossOrigin="anonymous"
          />

          <div className="cv-photo-gradient" />

          <span className="cv-photo-caption">
            DUO CYR WHEEL · LIVE PERFORMANCE
          </span>

          <DecorativeWheel className="cv-photo-wheel" />
        </div>
      </div>

      <div className="cv-hero-content">
        <p className="cv-overline">CONTEMPORARY CIRCUS DUO</p>

        <h1 className="cv-main-title">
          <span>DÚO</span>
          <span>SERENDIPIA</span>
        </h1>

        <div className="cv-ornamental-divider" aria-hidden="true">
          <span />
          <DecorativeWheel />
          <span />
        </div>

        <p className="cv-performer-names">
          Diana Sauval <span>&</span> José Figueroa
        </p>

        <p className="cv-main-disciplines">
          Duo Cyr Wheel · Hand-to-Hand
          <br />
          Acrobatic Tango · Partner Acrobatics
        </p>

        <div className="cv-contact-list">
          <ContactItem icon={<LocationIcon />} label="Based in">
            Lanzarote, Canary Islands, Spain
          </ContactItem>

          <ContactItem
            icon={<EmailIcon />}
            label="Email"
            href="mailto:dianasauval@hotmail.com"
          >
            dianasauval@hotmail.com
          </ContactItem>

          <ContactItem
            icon={<PhoneIcon />}
            label="WhatsApp"
            href="https://wa.me/5491159392983"
          >
            +54 9 11 5939 2983
          </ContactItem>

          <ContactItem
            icon={<WebsiteIcon />}
            label="Website"
            href="https://duoserendipia.com.ar"
          >
            duoserendipia.com.ar
          </ContactItem>
        </div>
      </div>
    </header>

    <section className="cv-section cv-profile-section">
      <SectionTitle number="01">PROFESSIONAL PROFILE</SectionTitle>

      <p className="cv-profile-text">
        Duo Serendipia is a contemporary circus duo formed by Diana Sauval and
        José Figueroa in 2020. Their work combines solo and duo Cyr wheel,
        hand-to-hand, acrobatic tango, partner acrobatics and movement. They
        have performed professionally in Argentina, Turkey and Spain in
        theatres, festivals, hotels and international productions. They are
        currently based in Lanzarote, Canary Islands.
      </p>
    </section>

    <section className="cv-section cv-main-acts-section">
      <SectionTitle number="02">MAIN ACTS</SectionTitle>

      <div className="cv-acts-grid">
        <article className="cv-act-card">
          <div className="cv-act-heading">
            <DecorativeWheel />

            <div>
              <span className="cv-card-label">ACT 01</span>
              <h3>Al Compás del Pivot</h3>
              <p>Duo Cyr Wheel & Acrobatic Tango</p>
            </div>
          </div>

          <ul className="cv-bullet-list">
            <li>Full act: 7 minutes</li>
            <li>Short version: 3:15 minutes</li>
            <li>Ground act · No rigging required</li>
          </ul>
        </article>

        <article className="cv-act-card">
          <div className="cv-act-heading">
            <DecorativeWheel />

            <div>
              <span className="cv-card-label">ACT 02</span>
              <h3>Contraparte</h3>
              <p>Hand-to-Hand / Duo Acrobatics</p>
            </div>
          </div>

          <ul className="cv-bullet-list">
            <li>Duration: 4 minutes</li>
            <li>Ground act · No rigging required</li>
          </ul>
        </article>
      </div>
    </section>

    <section className="cv-section cv-experience-section">
      <SectionTitle number="03">SELECTED PROFESSIONAL EXPERIENCE</SectionTitle>

      <div className="cv-timeline">
        {selectedExperience.map((item) => (
          <TimelineItem
            key={`${item.title}-${item.period}`}
            title={item.title}
            location={item.location}
            period={item.period}
          >
            {item.description}
          </TimelineItem>
        ))}
      </div>
    </section>

    <footer className="cv-page-footer">
      <div className="cv-footer-line" />

      <div className="cv-footer-content">
        <span>DÚO SERENDIPIA · ARTISTIC CV</span>
        <DecorativeWheel />
        <span>PAGE 1 / 2</span>
      </div>
    </footer>
  </section>
);

export default CvPageOne;
