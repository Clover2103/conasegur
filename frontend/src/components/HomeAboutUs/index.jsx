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
          <h4>¿QUIÉNES SOMOS?</h4>
          <p>«CONASEGUR» Corporación Nacional de Empresas de Seguridad Privada, que propenden por el desarrollo gremial de sus asociados...</p>
          <button>Conocer más</button>
        </div>
      </div>
    </div>
  );
};

export { HomeAboutUs };