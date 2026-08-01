import React from "react";
import DecorativeWheel from "../DecorativeWheel/DecorativeWheel";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
  HAND_TO_HAND_IMAGE,
  additionalSkillsLeft,
  additionalSkillsRight,
} from "../data/cvData";
import "./CvPageTwo.css";

type CvPageTwoProps = {
  onImageLoad: () => void;
};

const CvPageTwo = ({ onImageLoad }: CvPageTwoProps) => (
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
      <span>ARTISTIC CURRICULUM VITAE</span>
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
      <SectionTitle number="05">OTHER PROFESSIONAL EXPERIENCE</SectionTitle>

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
              Both performers participated in aerial harness acts, as well as
              solo and duo Cyr wheel performances for festivals and large-scale
              events.
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
              Cast members performing for municipalities and cultural events in
              Buenos Aires Province.
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
              Performed in “Gran Bohemia” and “Circus of Darkness”, presented at
              Festival Circo El Andén and Teatro Pepe Soriano.
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
              Bachelor’s Degree in Performing Arts, specialising in Circus Arts
              — Universidad Nacional de San Martín, Argentina. Graduated in
              2017.
            </li>

            <li>
              Extensive training in circus, acrobatics, dance and movement since
              childhood.
            </li>

            <li>
              Continued professional training in partner acrobatics, Cyr wheel
              and handstands.
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
              Professional Circus Artist and Acrobatic Dancer — Circo de las
              Artes, Buenos Aires, 2012–2015.
            </li>

            <li>More than 12 years of circus training.</li>

            <li>
              Continued professional training in acrobatics, dance, Cyr wheel
              and object manipulation.
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
            <li>Smooth, level floor, free of irregularities and slopes</li>
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
        onLoad={onImageLoad}
        crossOrigin="anonymous"
      />

      <div className="cv-bottom-photo-gradient" />

      <div className="cv-bottom-photo-copy">
        <span>HAND-TO-HAND · LIVE PERFORMANCE</span>

        <a href="https://duoserendipia.com.ar" target="_blank" rel="noreferrer">
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
);

export default CvPageTwo;
