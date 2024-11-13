import React from "react";
import "./QueriesConferences.css";

const QueriesConferences = () => {
  return (
    <div className="QueriesConferences container">
      <h3 className="m-4 text-center">WEBINAR OEA 28 DE JUNIO DEL 2023 (OPERADOR ECONOMICO AUTORIZADO)</h3>
      <div className="queries-conferences-video container mb-5">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/uExepWHQSmw" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export { QueriesConferences };
