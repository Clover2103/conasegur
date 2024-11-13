import React from "react";
import image1 from "../../assets/home/awards/img1.jpg";
import image2 from "../../assets/home/awards/img2.jpg";
import image3 from "../../assets/home/awards/img3.jpg";
import image4 from "../../assets/home/awards/img4.jpg";
import { useCarrucel } from "../../hooks/useCarrucel";
import "./HomeAwards.css";

const images = [image1, image2, image3, image4];

const awardsInfo = [
  {
    text: "Mayor numero de beneficiarios",
  },
  {
    text: "Menor numero de modificaciones",
  },
  {
    text: "2017",
  },
  {
    text: "Mayor cobertura en ciudades - Indice Desempleo",
  },
];

const HomeAwards = () => {

  const {
    currentIndex,
    sliderRef,
    scrollLeft,
    scrollRight,
  } = useCarrucel(images.length, false, 5000);

  const currentSede = awardsInfo[currentIndex];

  return (
    <div className="bodyHomeAwards">
      <h2 className="pt-5">NUESTROS PREMIOS</h2>
      <div className="awardsSlider mb-5" >
        <div className="contAwardsSlider">
          <button className="navBtnAward prevBtnAward" onClick={scrollLeft}>&#10094;</button>
          <div className="sliderAwards" ref={sliderRef}>
            {images.map((img, index) => {
              let className = 'sliderImgAward';
              if (index === currentIndex) {
                className += ' focusAward';
              } 
              else if (index === (currentIndex - 1 + images.length) % images.length) {
                className += ' leftAward';
              } else if (index === (currentIndex + 1) % images.length) {
                className += ' rightAward';
              }
              return (
                <div className={className} key={index}>
                  <img src={img} alt={`img-slider-${index + 1}`} />
                </div>
              );
            })}
          </div>
          <button className="navBtnAward nextBtnAward" onClick={scrollRight}>&#10095;</button>
        </div>

        {/* Contenedor flotante con información dinámica */}
        <div className="info-container-award">
          <div className="info-cont-award">
            <h2>{currentSede.text}</h2>
          </div>
        </div>

        <div className="slider-deg-award">
            
        </div>
      </div>
    </div>
  );
};

export { HomeAwards };