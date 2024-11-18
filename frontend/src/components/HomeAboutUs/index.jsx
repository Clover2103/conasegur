import React from "react";
import "./HomeAboutUs.css";
import image from "../../assets/home/about us/about us.png";
import logo from "../../assets/Logo Conasegur.png";

const HomeAboutUs = ({ showModal }) => {
  const handleButtonClick = () => {
    const content = 
    <div className="about-container-modal" id="aboutUs">
      <h2>QUIENES SOMOS</h2>
      <div className="about-content-text">
        <p>«CONASEGUR» Corporación Nacional de Empresas de Seguridad Privada, que propenden por el desarrollo gremial de sus asociados.</p>
        <p>Somos pioneros en la búsqueda, del conocimiento y la difusión de las mejores prácticas de seguridad y vigilancia, aplicadas a nivel internacional. Destacándonos en el sector por una exitosa gestión, así como el logro de objetivos de nuestros agremiados.</p>
      </div>
      <img src={logo} alt="quienes somos emergente" />
    </div>;
    showModal(content);
  };

  return (
    <div className="bodyHomeAboutUs">
      <div className="container mt-5 mb-5 containerHomeAboutUs">
        <div className="imageHomeAboutUs">
          <img src={image} alt="aboutUs" />
        </div>
        <div className="contHomeAboutUs">
          <h4>¿QUIÉNES SOMOS?</h4>
          <p>«CONASEGUR» Corporación Nacional de Empresas de Seguridad Privada, que propenden por el desarrollo gremial de sus asociados...</p>
          <button onClick={handleButtonClick}>Conocer más</button>
        </div>
      </div>
    </div>
  );
};

export { HomeAboutUs };