import React, { useState } from "react";
import vision from "../../assets/home/mandv/vision.png";
import mision from "../../assets/home/mandv/mision.png"
import './HomeMAndV.css';

const HomeMAndV = () => {

  const [isCovered, setIsCovered] = useState(true);

  const toggleCover = () => {
    setIsCovered(!isCovered);
  };

  return (
    <div className="bodyMAndV">
      <div className="containerMAndV container mt-5 mb-5">
        <div className="contentMAndV row g-2 w-100">
          {/* Sección de Misión */}
          <div className="mision col-md">
            <div className={`mision col-md ${isCovered ? 'covered' : ''}`}>
              <h3 className="mb-3">MISIÓN</h3>
              <p>Promover la transformación, modernización y eficiencia del sector, en procura del desarrollo integral y sostenible del mismo y sus agremiados.</p>
            </div>
            {/* Botón para alternar la cubierta */}
            <div className={`coverToggle${isCovered ? '' : 'covered'}`} >
              <img src={mision} alt="mision" />
              <button onClick={toggleCover}>
                {isCovered ? 'Mostrar Misión' : 'Mostrar Visión'}
              </button>
            </div>
          </div>

          {/* Sección de Visión */}
          <div className="vision col-md">
            <div className={`${isCovered ? '' : 'covered'}`}>
              <h3 className="mb-3">VISIÓN</h3>
              <p>«CONASEGUR», se perfila como una institución del alto nivel gremial, generando acciones que permitan con una estructura eficiente el desarrollo y fortalecimiento del sector ademas de sus agremiados.</p>
            </div>
            {/* Botón para alternar la cubierta */}
            <div className={`coverToggle${isCovered ? 'covered' : ''}`} >
              <img src={vision} alt="vision" />
              <button onClick={toggleCover}>
                {isCovered ? 'Mostrar Misión' : 'Mostrar Visión'}
              </button>
            </div>
          </div>

          
        </div>

        <div className="rectanguloMAndV"></div>
        {/* <div className="circleMAndV1"></div>
        <div className="circleMAndV2"></div>
        <div className="circleMAndV3"></div>
        <div className="circleMAndV4"></div>
        <div className="circleMAndV5"></div>
        <div className="circleMAndV6"></div>
        <div className="circleMAndV7"></div>
        <div className="circleMAndV8"></div>
        <div className="circleMAndV9"></div>
        <div className="circleMAndV10"></div>
        <div className="circleMAndV11"></div>
        <div className="circleMAndV12"></div>
        <div className="circleMAndV13"></div> */}
      </div>
    </div>
  );
};

export { HomeMAndV };