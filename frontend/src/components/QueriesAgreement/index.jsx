import React from "react";
import imagen1 from "../../assets/queries/agreement/2012.png";
import imagen2 from "../../assets/queries/agreement/2014.png";
import imagen3 from "../../assets/queries/agreement/2015.png";
import imagen4 from "../../assets/queries/agreement/2016.png";
import imagen5 from "../../assets/queries/agreement/2017.png";
import imagen6 from "../../assets/queries/agreement/2018.png";
import imagen7 from "../../assets/queries/agreement/2019.png";
import imagen8 from "../../assets/queries/agreement/2020.png";
import { useCarrucel } from "../../hooks/useCarrucel";
import "./QueriesAgreement.css";

const images = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8];

const agreementInfo = [
  {
    title: "Convenio 2012 DG-001",
    text: (
      <div>
        <h6>Congreso: primera convención nacional de seguridad privada Conasegur</h6>
        <ul>
          <li>Posición de la superintendencia de vigilancia y seguridad privada respecto de la reforma tributaria y el nuevo proyecto de ley modificatorio 356.</li>
          <li>Paz, el conflicto y el eventual post conflicto a diario</li>
          <li>Salud ocupacional y prevención de riesgos.</li>
          <li>Presentación programa social bandera de la corporación.</li>
          <li>Papel de la seguridad privada en el post conflicto.</li>
          <li>Panel de seguridad: procesos de paz, post conflicto parte social y la seguridad privada.</li>
          <li>Café taller: reforma tributaria.</li>
        </ul>
        <p>Línea de formación para alta gerencia: actualizar las competencias gerenciales específicas para profundizar conocimientos generando estructuras lógicas de pensamientos que permitan la toma de decisiones estratégicas que mejoren la profundidad y competitividad de los beneficiarios.</p>
      </div>
    ),
    tipo: "img",
    src: imagen1,
  },
  {
    title: "Convenio 2014 DG-002",
    text: (
      <div>
        <h6>Diplomado: Manejo del riesgo gerencial y estratégico de una organización de servicios en seguridad privada.</h6>
        <ul>
          <li>Inteligencia empresarial aplicada a la seguridad privada.</li>
          <li>Comunicaciones estratégicas en los servicios de seguridad.</li>
          <li>Coaching gerencial para el sector de seguridad.</li>
          <li>Mutación del riesgo en los servicios de seguridad.</li>
          <li>Seguridad corporativa.</li>
          <li>Planeación estratégica para evitar riesgos en seguridad privada.</li>
          <li>Como fomentar un ambiente laboral creativo aplicado al sector.</li>
        </ul>
      </div>
    ),
    tipo: "img",
    src: imagen2,
  },
  {
    title: "Convenio 2015 DG-001",
    text: (
      <div>
        <p>Transferencia de tecnología de utilización inmediata en el sector productivo y orientar la creatividad de los trabajadores colombianos.</p>
        <p>Capacitamos y actualizamos al personal directivo de las empresas de vigilancia y seguridad privada en el desarrollo de competencias gerenciales, desarrollado bajo un enfoque de competencias laborales.</p>
      </div>
    ),
    tipo: "img",
    src: imagen3,
  },
  {
    title: "Convenio 2016 DG-003",
    text: (
      <div>
        <h6>Se realizaron:</h6>
        <ul>
          <li>Especializaciones en vigilancia y seguridad privada.</li>
          <li>Reentrenamiento ciclo de escoltas.</li>
          <li>Reentrenamiento ciclo de supervisores.</li>
          <li>Reentrenamiento ciclo de vigilantes</li>
        </ul>
      </div>
    ),
    tipo: "img",
    src: imagen4,
  },
  {
    title: "Convenio 2017 DG-001",
    text: (
      <div>
        <h6>Acciones de Formación:</h6>
        <ul>
          <li>Actualización de competencias en seguridad privada para vigilantes.</li>
          <li>Profundización en modos de operación delincuencial para personal de vigilancia.</li>
          <li>Rol de la seguridad privada en el nuevo código de policía.</li>
          <li>Supervisión en servicios de seguridad privada.</li>
        </ul>
      </div>
    ),
    tipo: "img",
    src: imagen5,
  },
  {
    title: "Convenio 0093 DG-006 del 2018",
    text: (
      <div>
        <h6>Unidades Temáticas:</h6>
        <ul>
          <li>Gerencia de Seguridad para el Sector de vigilancia.</li>
          <li>Criminalística en Servicios de Vigilancia y Seguridad Privada. </li>
          <li>Importancia del código de Policía en los modos de operacion delincuencial enfocados al rol del personal de vigilancia.</li>
          <li>Instalación de Medios Tecnológicos de seguridad para Vigilancia y Seguridad Privada.</li>
          <li>Seguridad Integral para las Organizaciones.</li>
        </ul>
      </div>
    ),
    tipo: "img",
    src: imagen6,
  },
  {
    title: "Convenio 2019 DG-0030",
    text: "",
    tipo: "img",
    src: imagen7,
  },
  {
    title: "Convenio 0036 de 2020",
    text: (
      <div>
        <h6>Acciones de Formación:</h6>
        <ul>
          <li>BOOPCAMP – CO CREACIÓN PARA EL MANEJO DE REPROCESOS EN LAS OPERACIONES DE LA EMPRESA</li>
          <li>CURSO Futuro Tecnológico – aplicación en la seguridad y vigilancia Privada</li>
          <li>Taller Gestión de stakeholders en los proyectos de servicios de vigilancia y seguridad privada</li>
          <li>ITaller Cambiar o morir – Adaptación del gerente a la revolución 4.0 en el sector de servicios de vigilancia y seguridad privada.</li>
          <li>SEMINARIO – La tecnología como innovación, catalizador y ampliación del negocio de servicios de vigilancia y seguridad privada.</li>
        </ul>
      </div>
    ),
    tipo: "img",
    src: imagen8,
  }

];

const QueriesAgreement = ({ showModal }) => {

  const handleButtonClick = () => {
    const content = 
    <div className="about-container-modal" id="aboutUs">
      <h2>{currentAgreement.title}</h2>
      {
        currentAgreement.tipo === "img" 
        ? <img src={currentAgreement.src} alt={currentAgreement.title} />
        : <video src={currentAgreement.src} controls />
      }
      <div className="about-content-text">
        {currentAgreement.text}
      </div>
    </div>;
    showModal(content);
  };

  const {
    currentIndex,
    sliderRef,
    scrollLeft,
    scrollRight,
    handleMouseEnter,
    handleMouseLeave,
  } = useCarrucel(images.length, false, 5000);

  const currentAgreement = agreementInfo[currentIndex];

  return (
    <div className="bodyConsultationSedes">
      <div className="homeSliderQA"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="cont-sliderQA">
          <button className="nav-btn prev-btn" onClick={scrollLeft}>&#10094;</button>
          <div className="sliderQA" ref={sliderRef}>
            {images.map((img, index) => {
              let className = 'sliderQA-img';
              if (index === currentIndex) {
                className += ' focus';
              } 
              else if (index === (currentIndex - 1 + images.length) % images.length) {
                className += ' left';
              } else if (index === (currentIndex + 1) % images.length) {
                className += ' right';
              }
              return (
                <div className={className} key={index}>
                  <img src={img} alt={`img-sliderQA-${index + 1}`} />
                </div>
              );
            })}
          </div>
          <button className="nav-btn next-btn" onClick={scrollRight}>&#10095;</button>
        </div>

        {/* Contenedor flotante con información dinámica */}
        <div className="info-container">
          <h2>{currentAgreement.title}</h2>
          <div className="info-btns">
            <button onClick={handleButtonClick}>
              CONOCER MÁS
            </button>
          </div>
        </div>

        <div className="sliderQA-deg">
            
        </div>
      </div>
    </div>
  );
};

export { QueriesAgreement };