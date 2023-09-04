import React from 'react';
import { Element } from "react-scroll";
import "./contact.css";

export default function ContactSection() {
  return (
    <Element name='contact' className='contactSection'>
        <h1>Contacto</h1>
        <div className='info'>
          <h2>Contrataciones</h2>
          <p>Teléfono: +549115939-2983</p>
          <p>dianasauval@hotmail.com</p>
        </div>
    </Element>
  )
}
