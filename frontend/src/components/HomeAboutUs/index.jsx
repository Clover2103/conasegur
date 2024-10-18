import React from "react";
import "./HomeAboutUs.css";
import image from "../../assets/home/about us/about us.png";

const HomeAboutUs = () => {
  return (
    <div className="bodyHomeAboutUs">
      <div className="container mt-5 mb-5 containerHomeAboutUs">
        <div className="imageHomeAboutUs">
          <img src={image} alt="aboutUs" />
        </div>
        <div className="contHomeAboutUs">
          <h3>¿QUIÉNES SOMOS?</h3>
          <p>«CONASEGUR» Corporación Nacional de Empresas de Seguridad Privada, que propenden por el desarrollo gremial de sus asociados.</p>
          <p>Somos pioneros en la búsqueda,  ...</p>
          <button>Conocer más</button>
        </div>
      </div>
    </div>
  );
};

export { HomeAboutUs };