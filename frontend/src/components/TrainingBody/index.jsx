import React from "react";
import "./TrainingBody.css";

const trainingInfo = [
  { nombre: "COORDINACIÓN DE OPERACIONES EN SEGURIDAD PRIVADA", modalidad: "PRESENCIAL/VIRTUAL"},
  { nombre: "GERENCIA DE SERVICIOS DE S.V.P.", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "GESTIÓN DEL TALENTO HUMANO EN S.V.P.", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "GESTIÓN INTEGRAL DEL RIESGO NTC-ISO 31000", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "SEGURIDAD INFORMÁTICA", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "TÉCNICAS PARA LA ELABORACIÓN DE ANÁLISIS DE SEGURIDAD E INSPECCIONES FÍSICAS", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "CONOCIMIENTOS BÁSICOS EN ANTITERRORISMO Y ANTIEXPLOSIVOS", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "DERECHOS HUMANOS Y DERECHO INTERNACIONAL HUMANITARIO (DDHH)", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "ADMINISTRACIÓN DE SERVICIOS DE SEGURIDAD Y VIGILANCIA PRIVADA", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "TÉCNICAS PARA LA ELABORACIÓN DE ANÁLISIS DE RIESGOS E INSPECCIONES FÍSICAS APLICADOS AL SERVICIO DE S.V.P.", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "ALTA GERENCIA EN SEGURIDAD INTEGRAL PARA LAS ORGANIZACIONES DEL SECTOR DE S.V.P.", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "ALTA GERENCIA DE SERVICIO Y ATENCIÓN AL CLIENTE (SAC)", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "AUDITOR EN SISTEMAS DE GESTIÓN PARA OPERACIONES DE SEGURIDAD PRIVADA NTC-ISO 18788:2018", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "GESTOR DE INFORMACIÓN Y SERVICIO AL CLIENTE", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "FUTURO TECNOLÓGICO: APLICACIÓN A LA S.V.P.", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "SARLAFT", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "SIPLAFIT", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "CONTROL DE ACCESOS EN S.V.P.", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "CCTV Y SISTEMAS DE MONITOREO EN S.V.P.", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "CIBERSEGURIDAD", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "LEGÍTIMA DEFENSA", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "CONTINUIDAD DEL NEGOCIO Y GESTIÓN DE CRISIS", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "SISTEMAS INTEGRADOS DE GESTIÓN", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "DERECHOS HUMANOS Y USO DE LA FUERZA ENFOQUE NTC-ISO 18788:2018", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "SISTEMA DE GESTIÓN DEL RIESGO NTC-ISO 31000", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "ÉTICA Y RESPONSABILIDAD SOCIAL CORPORATIVA", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "ADMINISTRACIÓN DE LA PROPIEDAD HORIZONTAL", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "ECONOMÍA NARANJA EN EL SECTOR DE LA S.V.P.", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "GESTIÓN HUMANA Y GESTIÓN DEL CONOCIMIENTO", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "GERENCIA DE PROTECCIÓN DE ACTIVOS CRÍTICOS", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "PROTECCIÓN A INFRAESTRUCTURAS CRÍTICAS", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "JEFES DE RECURSOS HUMANOS EN S.V.P.", modalidad: "PRESENCIAL/VIRTUAL" },
  { nombre: "JEFES DE OPERACIÓN DE EMPRESA EN S.V.P.", modalidad: "PRESENCIAL/VIRTUAL" },
];

const TrainingBody = ({ showModal }) => {

  const handleButtonClick = (titulo) => {
    const content = (
      <div className="training-container-modal" id="aboutUs">
        <h3>{titulo}</h3>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Nombre</th>
                <th>Modalidad</th>
              </tr>
            </thead>
            <tbody>
              {trainingInfo.map((item, index) => (
                <tr key={index}>
                  <td>{item.nombre}</td>
                  <td>{item.modalidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <a href="https://api.whatsapp.com/send?phone=573144422577" target="_blank">
          <button className="btn btn-dark w-100" >CONOCER MÁS</button>
        </a>
      </div>
    );
    showModal(content);
  };

  return (
    <div className="bodyTraining container">
      <div className="cont-training cont-training-1">
        <h5>CURSOS</h5>
        <p>Certificaciones enfocadas en desarrollar competencias específicas, adaptadas a las necesidades y estándares actuales, garantizando una formación sólida y práctica.</p>
        <button className="btn btn-dark" onClick={() => handleButtonClick("CURSOS")}>CONOCER MÁS</button>
      </div>
      <div className="cont-training cont-training-2">
        <h5>SEMINARIOS</h5>
        <p>Certificaciones de corta duración que profundizan en temas esenciales, proporcionando herramientas actualizadas para la mejora profesional continua.</p>
        <button className="btn btn-dark" onClick={() => handleButtonClick("SEMINARIOS")}>CONOCER MÁS</button>
      </div>
      <div className="cont-training cont-training-3">
        <h5>DIPLOMADOS</h5>
        <p>Certificaciones avanzadas que integran conocimientos especializados y prácticas estratégicas, impulsando el crecimiento profesional con respaldo académico.</p>
        <button className="btn btn-dark" onClick={() => handleButtonClick("DIPLOMADOS")}>CONOCER MÁS</button>
      </div>
      <div className="cont-training cont-training-4">
        <h5>TALLERES</h5>
        <p>Certificaciones prácticas diseñadas para fortalecer habilidades clave mediante ejercicios dinámicos y casos aplicados.</p>
        <button className="btn btn-dark" onClick={() => handleButtonClick("TALLERES")}>CONOCER MÁS</button>
      </div>

      {/* Background Circles */}
      <div className="cont-training-back cont-training-back-1"></div>
      <div className="cont-training-back cont-training-back-2"></div>
      <div className="cont-training-back cont-training-back-3"></div>
      <div className="cont-training-back cont-training-back-4"></div>

      {/* Connections */}
      <div className="connection connection-1-2"></div>
      <div className="connection connection-2-3"></div>
      <div className="connection connection-3-4"></div>

      {/* Circles for background */}
      <div className="circule-for-back circule-for-back-1"></div>
      <div className="circule-for-back circule-for-back-2"></div>
      <div className="circule-for-back circule-for-back-3"></div>
      <div className="circule-for-back circule-for-back-4"></div>
      <div className="circule-for-back circule-for-back-5"></div>
      <div className="circule-for-back circule-for-back-6"></div>
    </div>
  );
};

export { TrainingBody };