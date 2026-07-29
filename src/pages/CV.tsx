import React from "react";
import "./CV.css";

/* =========================================================
   IMÁGENES
   ========================================================= */

const CYR_IMAGE =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1739114710/Duo%20Serendipia/003_1540-NEF_DxO_DeepPRIME_zllfw1.jpg";

const HAND_TO_HAND_IMAGE =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1785345714/Duo%20Serendipia/_MG_5769-CR2_DxO_DeepPRIME_o1cfvc.jpg";

/* =========================================================
   ICONOS
   Se utilizan SVG internos para no instalar librerías.
   ========================================================= */

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="cv-contact-icon">
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

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="cv-contact-icon">
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

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="cv-contact-icon">
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

const WebsiteIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="cv-contact-icon">
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

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="cv-print-icon">
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

/* =========================================================
   COMPONENTES VISUALES PEQUEÑOS
   ========================================================= */

type SectionTitleProps = {
  number: string;
  children: React.ReactNode;
  centered?: boolean;
};

const SectionTitle = ({
  number,
  children,
  centered = false,
}: SectionTitleProps) => (
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

type DecorativeWheelProps = {
  className?: string;
};

const DecorativeWheel = ({ className = "" }: DecorativeWheelProps) => (
  <span className={`cv-decorative-wheel ${className}`} aria-hidden="true">
    <span className="cv-decorative-wheel__outer" />
    <span className="cv-decorative-wheel__middle" />
    <span className="cv-decorative-wheel__inner" />
  </span>
);

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  href?: string;
};

const ContactItem = ({ icon, label, children, href }: ContactItemProps) => (
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

type TimelineItemProps = {
  title: string;
  location?: string;
  period?: string;
  children: React.ReactNode;
};

const TimelineItem = ({
  title,
  location,
  period,
  children,
}: TimelineItemProps) => (
  <article className="cv-timeline-item">
    <span className="cv-timeline-dot" aria-hidden="true" />

    <div className="cv-timeline-heading">
      <h3>{title}</h3>

      {location && (
        <>
          <span className="cv-timeline-separator">—</span>
          <span className="cv-timeline-location">{location}</span>
        </>
      )}

      {period && (
        <>
          <span className="cv-timeline-period-separator">|</span>
          <time>{period}</time>
        </>
      )}
    </div>

    <p>{children}</p>
  </article>
);

/* =========================================================
   DATOS
   Podés modificar estos textos sin tocar el diseño.
   ========================================================= */

const additionalSkillsLeft = [
  <>
    Solo Cyr wheel — <strong>Diana</strong>
  </>,
  <>
    Solo Cyr wheel — <strong>José</strong>
  </>,
  <>
    Handstands — <strong>Diana</strong>
  </>,
  <>
    Partner acrobatics — <strong>Diana & José</strong>
  </>,
];

const additionalSkillsRight = [
  <>
    Acro-dance — <strong>Diana</strong>
  </>,
  <>
    Acrobatic tango — <strong>Diana & José</strong>
  </>,
  <>
    Cube manipulation — <strong>José</strong>
  </>,
  <>
    Partner movement — <strong>Diana & José</strong>
  </>,
];

/* =========================================================
   COMPONENTE PRINCIPAL
   ========================================================= */

const Cv = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="cv-screen">
      {/* Este botón se ve en pantalla, pero desaparece al imprimir. */}
      <button
        type="button"
        className="cv-print-button"
        onClick={handlePrint}
        aria-label="Descargar o imprimir currículum"
      >
        <DownloadIcon />
        <span>Descargar PDF</span>
      </button>

      <div className="cv-document">
        {/* =====================================================
            PÁGINA 1
            ===================================================== */}

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
                Acrobatic Tango · Ground Acts
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
              Duo Serendipia is a contemporary circus duo formed by Diana Sauval
              and José Figueroa in 2020. Their work combines solo and duo Cyr
              wheel, hand-to-hand, acrobatic tango, partner acrobatics and
              movement. They have performed professionally in Argentina, Turkey
              and Spain in theatres, festivals, hotels and international
              productions. They are currently based in Lanzarote, Canary
              Islands.
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
                  <li>Duration: approximately 4 minutes</li>
                  <li>Ground act · No rigging required</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="cv-section cv-experience-section">
            <SectionTitle number="03">
              SELECTED PROFESSIONAL EXPERIENCE
            </SectionTitle>

            <div className="cv-timeline">
              <TimelineItem
                title="Romantic Corporate"
                location="Lanzarote, Spain"
                period="2026–Present"
              >
                Resident performers in hotel and entertainment productions.
              </TimelineItem>

              <TimelineItem
                title="Romantic Corporate"
                location="Mallorca, Spain"
                period="2025"
              >
                Performers in a resident multidisciplinary circus production.
              </TimelineItem>

              <TimelineItem
                title="Innovacirco / CINO Goldstar"
                location="Antalya, Turkey"
                period="2024"
              >
                Six-month contract performing Cyr wheel and duo acrobatics in
                five-star hotels.
              </TimelineItem>

              <TimelineItem
                title="Festival Payasadas"
                location="Rosario, Argentina"
                period="2023"
              >
                Selected performers and workshop instructors at an international
                circus festival.
              </TimelineItem>

              <TimelineItem title="MICA" location="Argentina" period="2023">
                Selected for the Argentine Cultural Industries Market.
              </TimelineItem>

              <TimelineItem
                title="Circo del Ánima by Flavio Mendoza"
                location="Argentina"
              >
                Solo and duo Cyr wheel performances in a large-scale circus
                production.
              </TimelineItem>
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

        {/* =====================================================
            PÁGINA 2
            ===================================================== */}

        <section
          className="cv-page cv-page--two"
          aria-label="Página 2 del currículum artístico"
        >
          <div className="cv-paper-texture" aria-hidden="true" />

          <div className="cv-page-corner cv-page-corner--top-left">
            <span />
            <span />
            <span />
          </div>

          <div className="cv-page-corner cv-page-corner--bottom-right">
            <span />
            <span />
            <span />
          </div>

          <header className="cv-page-two-header">
            <span>CURRÍCULUM ARTÍSTICO</span>

            <div className="cv-page-two-header-line" />

            <strong>02 / 02</strong>
          </header>

          <section className="cv-section cv-skills-section">
            <SectionTitle number="04">ADDITIONAL SKILLS</SectionTitle>

            <div className="cv-skills-grid">
              <div className="cv-skill-column">
                <ul className="cv-bullet-list">
                  {additionalSkillsLeft.map((skill, index) => (
                    <li key={`left-skill-${index}`}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="cv-skill-column">
                <ul className="cv-bullet-list">
                  {additionalSkillsRight.map((skill, index) => (
                    <li key={`right-skill-${index}`}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="cv-section cv-other-experience-section">
            <SectionTitle number="05">
              OTHER PROFESSIONAL EXPERIENCE
            </SectionTitle>

            <div className="cv-other-experience-grid">
              <article className="cv-experience-card">
                <span className="cv-experience-card-dot" />

                <div>
                  <div className="cv-experience-card-heading">
                    <h3>Phaway Company</h3>
                    <span>Argentina</span>
                    <time>2022–2023</time>
                  </div>

                  <p>
                    Both performers participated in aerial harness acts, as well
                    as solo and duo Cyr wheel performances for festivals and
                    large-scale events.
                  </p>
                </div>
              </article>

              <article className="cv-experience-card">
                <span className="cv-experience-card-dot" />

                <div>
                  <div className="cv-experience-card-heading">
                    <h3>Runa Civil Association</h3>
                    <span>Argentina</span>
                    <time>2019–2023</time>
                  </div>

                  <p>
                    Cast members performing for municipalities and cultural
                    events in Buenos Aires Province.
                  </p>
                </div>
              </article>

              <article className="cv-experience-card">
                <span className="cv-experience-card-dot" />

                <div>
                  <div className="cv-experience-card-heading">
                    <h3>Compañía Scazziota</h3>
                    <span>Argentina</span>
                    <time>2023</time>
                  </div>

                  <p>
                    Performed in “Gran Bohemia” and “Circus of Darkness”,
                    presented at Festival Circo El Andén and Teatro Pepe
                    Soriano.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className="cv-section cv-education-section">
            <SectionTitle number="06" centered>
              TRAINING & EDUCATION
            </SectionTitle>

            <div className="cv-education-grid">
              <article className="cv-person-column">
                <div className="cv-person-heading">
                  <DecorativeWheel />

                  <h3>Diana Sauval</h3>
                </div>

                <ul className="cv-bullet-list">
                  <li>
                    Bachelor’s Degree in Performing Arts, specialising in Circus
                    Arts — Universidad Nacional de San Martín, Argentina.
                    Graduated in 2017.
                  </li>

                  <li>
                    More than 20 years of training in circus, acrobatics, dance
                    and movement.
                  </li>

                  <li>
                    Continued professional training in partner acrobatics, Cyr
                    wheel and handstands.
                  </li>
                </ul>
              </article>

              <div className="cv-vertical-divider" aria-hidden="true">
                <DecorativeWheel />
              </div>

              <article className="cv-person-column">
                <div className="cv-person-heading">
                  <DecorativeWheel />

                  <h3>José Figueroa</h3>
                </div>

                <ul className="cv-bullet-list">
                  <li>
                    Professional Circus Artist and Acrobatic Dancer — Circo de
                    las Artes, Buenos Aires, 2012–2015.
                  </li>

                  <li>More than 12 years of circus training.</li>

                  <li>
                    Continued professional training in acrobatics, dance, Cyr
                    wheel and object manipulation.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <section className="cv-section cv-technical-section">
            <SectionTitle number="07" centered>
              TECHNICAL REQUIREMENTS
            </SectionTitle>

            <div className="cv-technical-grid">
              <article className="cv-technical-column">
                <div className="cv-technical-heading">
                  <DecorativeWheel />
                  <h3>Cyr Wheel Acts</h3>
                </div>

                <ul className="cv-bullet-list">
                  <li>Ideal performance area: 6 × 6 m</li>
                  <li>Minimum performance area: 5 × 5 m</li>
                  <li>Minimum clear height: 3 m</li>
                  <li>
                    Smooth, level floor, free of irregularities and slopes
                  </li>
                  <li>Dry, non-slippery surface</li>
                  <li>No carpet</li>
                  <li>No rigging required</li>
                  <li>Two Cyr wheels: approximately 18 kg and 20 kg</li>
                </ul>
              </article>

              <div className="cv-vertical-divider" aria-hidden="true">
                <DecorativeWheel />
              </div>

              <article className="cv-technical-column">
                <div className="cv-technical-heading">
                  <DecorativeWheel />
                  <h3>Hand-to-Hand / Acro Acts</h3>
                </div>

                <ul className="cv-bullet-list">
                  <li>Minimum performance area: 4 × 4 m</li>
                  <li>Minimum clear height: 4 m</li>
                  <li>Smooth, level floor</li>
                  <li>Dry, non-slippery surface</li>
                  <li>No rigging required</li>
                </ul>
              </article>
            </div>
          </section>

          <figure className="cv-bottom-photo">
            <img
              src={HAND_TO_HAND_IMAGE}
              alt="Diana Sauval y José Figueroa realizando un acto de mano a mano"
            />

            <div className="cv-bottom-photo-gradient" />

            <div className="cv-bottom-photo-copy">
              <span>HAND-TO-HAND · LIVE PERFORMANCE</span>

              <a
                href="https://duoserendipia.com.ar"
                target="_blank"
                rel="noreferrer"
              >
                duoserendipia.com.ar
              </a>
            </div>

            <div className="cv-bottom-photo-rings" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </figure>

          <footer className="cv-page-footer cv-page-footer--second">
            <div className="cv-footer-line" />

            <div className="cv-footer-content">
              <span>DÚO SERENDIPIA · ARTISTIC CV</span>

              <DecorativeWheel />

              <span>PAGE 2 / 2</span>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
};

export default Cv;
