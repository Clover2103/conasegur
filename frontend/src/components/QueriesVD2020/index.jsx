import React from "react";
import { useCarrucel } from "../../hooks/useCarrucel";
import image1 from "../../assets/queries/vigilante day/imagen12020.jpg";
import image2 from "../../assets/queries/vigilante day/imagen22020.jpg";
import image3 from "../../assets/queries/vigilante day/imagen32020.jpg";
import image4 from "../../assets/queries/vigilante day/imagen42020.jpg";
import image5 from "../../assets/queries/vigilante day/imagen52020.jpg";
import "./QueriesVD2020.css";

const VD2020Data = [
  { title: "foto 1", src: image1 },
  { title: "foto 2", src: image2 },
  { title: "foto 3", src: image3 },
  { title: "foto 4", src: image4 },
  { title: "foto 5", src: image5 },
]

const QueriesVD2020 = () => {

  const {
    currentIndex,
    sliderRef,
    scrollUp,
    scrollDown,
  } = useCarrucel(VD2020Data.length, false, 5000);

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      visibleSlides.push(VD2020Data[(currentIndex + i) % VD2020Data.length]);
    }
    return visibleSlides;
  };

  return (
    <div className="contCarrucelVD">
      <button className="nav-btn-QA prev-btn" onClick={scrollUp}>&#9650;</button>
      <div className="contVDCarrucel">
        {getVisibleSlides().map((slide, index) => (
          <div key={index} className={`VDCarrucel VDCarrucel-${index}`}>
            <img src={slide.src} alt={slide.title} />
          </div>
        ))}
      </div>
      <button className="nav-btn-QA next-btn" onClick={scrollDown}>&#9660;</button>
    </div>
  );
};

export { QueriesVD2020 };