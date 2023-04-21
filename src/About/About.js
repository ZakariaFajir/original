import React from 'react';
import './About.css';
import img2 from '../Images/img2.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="heading">
        <h1>A propos de nous</h1>
      </div>

      <div className="about-container">
        <img src={img2} alt="about-us" />
        <div className="about-text">
          <p>
            Nous sommes un restaurant qui se concentre sur la création de plats délicieux et originaux pour nos clients.
            Notre équipe de chefs expérimentés travaille dur pour fournir des plats exceptionnels, inspirés des cuisines du
            monde entier.
          </p>
          <p>
            Nous sommes fiers de nos ingrédients de qualité supérieure et de notre service client exceptionnel. Nous sommes
            impatients de vous servir bientôt !
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

