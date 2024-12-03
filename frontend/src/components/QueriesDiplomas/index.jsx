import React, { useState } from "react";
import "./QueriesDiplomas.css";

const sershCertificateDiploma = process.env.REACT_APP_SERSH_CERTIFICATE_DIPLOMA;

const QueriesDiplomas = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const CC = document.getElementById("inputQD").value.trim();
  
    if (!CC) {
      setError("Por favor, ingrese un número de documento.");
      setData(null);
      return;
    }
  
    try {
      const response = await fetch(sershCertificateDiploma, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ CC }),
      });
  
      const responseData = await response.json();
  
      if (responseData.status === "success") {
        setData(responseData.data);
        setError("");
      } else {
        setData(null);
        setError(responseData.message || "Error al realizar la consulta.");
      }
    } catch (error) {
      setData(null);
      setError("Error de conexión con el servidor.");
    }
  };  

  return (
    <div className="container certificate-body mb-5">
      <div className="certificate">
        <h3>Consulta de Diplomas y Certificados</h3>
      </div>
      <form id="formConsultationCertificate" onSubmit={handleSubmit}>
        <div className="row g-2">
          <div className="col-md-5">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="inputQD"
                placeholder="Número de documento"
              />
              <label htmlFor="inputQD">Ingrese el número de documento o NRO</label>
            </div>
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btn-dark">Consultar</button>
          </div>
        </div>
      </form>
      <div>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
      {data && (
        <div>
          <h4>Resultado de la consulta</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>NRO</th>
                <th>NOMBRE</th>
                <th>CEDULA</th>
                <th>CURSO</th>
                <th>EXPEDICION</th>
                <th>INTENSIDAD</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.nro}</td>
                  <td>{item["1nombre"]} {item["2nombre"]} {item["1apellido"]} {item["2apellido"]}</td>
                  <td>{item.cedula}</td>
                  <td>{item.curso}</td>
                  <td>{item.expedicion}</td>
                  <td>{item.intensidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export { QueriesDiplomas };
