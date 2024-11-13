import React from "react";
import { useCarrucel } from "../../hooks/useCarrucel";
import "./HomeGoalsCard.css";

const goalsData = [
  { title: "5", description: "Buscar interacción con organizaciones nacionales e internacionales que generen conocimientos que fortalezcan el sector" },
  { title: "1", description: "Contribuir  al desarrollo del país mediante una gestión eficiente del sector" },
  { title: "2", description: "Defender y representar los intereses de los afiliados" },
  { title: "3", description: "Establecer convenios y desarrollar acciones de interés de los agremiados" },
  { title: "4", description: "Desarrollar programas que permitan avances en todas la áreas de aplicación para beneficios de los agremiados" },
]

const HomeGoalsCard = () => {

  const {
    currentIndex,
    sliderRef,
    scrollUp,
    scrollDown,
  } = useCarrucel(goalsData.length, false, 5000);

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      visibleSlides.push(goalsData[(currentIndex + i) % goalsData.length]);
    }
    return visibleSlides;
  };


  return (
    <div className="contCarrucel">
      <button className="nav-btn-QA prev-btn" onClick={scrollUp}>&#9650;</button>
      <div className="contGoalsCarrucel">
        {getVisibleSlides().map((slide, index) => (
          <div key={index} className={`goalsCarrucel goalsCarrucel-${index}`}>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <button className="nav-btn-QA next-btn" onClick={scrollDown}>&#9660;</button>
    </div>
  );
};

export { HomeGoalsCard };