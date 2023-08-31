import React from "react";
import "./about.css";
import foto from "../img/ACRODUO 31-10-22 26.jpg";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <div className="about">
        <div>
          <h1>¿Quienes somos?</h1>
          <div className="text">
            <p>
              Serendipia es un dúo multidisciplinario que en su búsqueda
              artística desarrolla una estética de movimiento impecable. La
              diversidad de estilos de danza y acrobacia hacen que sea una
              creación no convencional que manifiesta su personalidad
              innovadora.
            </p>
            <p>
              Los enlaces de cada movimiento entre las acrobacias y la danza
              componen imágenes impactantes y sorpresivas para el público. Los
              cuerpos se entrecruzan y desenvuelven, se trasladan por el suelo y
              el aire, se conectan y conforman el vínculo de una pareja que
              llena el escenario con su presencia.
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url('" + foto + "')" }}
          className="img"
        />
      </div>
    </Element>
  );
};

export default About;
