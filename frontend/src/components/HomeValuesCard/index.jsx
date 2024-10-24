import React from "react";
import { useCarrucel } from "../../hooks/useCarrucel";
import "./HomeValuesCard.css";

const valuesData = [
  { title: "Integridad", description: "Actuamos con transparencia y ética en todo lo que hacemos, manteniendo siempre nuestra palabra." },
  { title: "Solidaridad", description: "Nos apoyamos mutuamente y trabajamos juntos para lograr un impacto positivo en nuestra comunidad." },
  { title: "Responsabilidad social", description: "Nos comprometemos con el bienestar de nuestra sociedad, contribuyendo al desarrollo sostenible." },
  { title: "Compromiso", description: "Estamos dedicados a cumplir nuestras metas, siempre dando lo mejor de nosotros." },
  { title: "Sentido de pertenencia", description: "Nos sentimos orgullosos de ser parte de esta familia, y eso nos motiva a seguir creciendo juntos." }
];

const HomeValuesCard = () => {

  const {
    currentIndex,
    sliderRef,
    scrollUp,
    scrollDown,
  } = useCarrucel(valuesData.length, false, 5000);

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      visibleSlides.push(valuesData[(currentIndex + i) % valuesData.length]);
    }
    return visibleSlides;
  };

  return (
    <div className="contCarrucel">
      <button className="nav-btn-QA prev-btn" onClick={scrollUp}>&#9650;</button>
      <div className="contValuesCarrucel">
        {getVisibleSlides().map((slide, index) => (
          <div key={index} className={`valuesCarrucel valuesCarrucel-${index}`}>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <button className="nav-btn-QA next-btn" onClick={scrollDown}>&#9660;</button>
    </div>
  );
};

export { HomeValuesCard };