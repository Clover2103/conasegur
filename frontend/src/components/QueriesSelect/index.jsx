import React from "react";
import "./QueriesSelect.css";

const QueriesSelect = ({ onSelectChange }) => {

  const handleSelectChange = (event) => {
    const value = event.target.value;
    onSelectChange(value);
  }

  return (
    <div className="bodyConsultationSelect container mb-3">
      <div className="form-floating consultation-cont">
        <select 
          className="form-select" 
          id="selectConsultation" 
          aria-label="Floating label select example" 
          onChange={handleSelectChange}
          defaultValue="certificado"
        >
        <option value="diplomas">Diplomas</option>
        <option value="certificados">Certificados SENA</option>
        <option value="convenios">Convenios</option>
        <option value="dia-vigilante">Dial del vigilante</option>
        <option value="conferencias">Conferencias</option>
        </select>
        <label htmlFor="selectConsultation">Realizar consulta</label>
      </div>
    </div>
  );
};

export { QueriesSelect };