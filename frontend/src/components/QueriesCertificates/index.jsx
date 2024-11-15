import React, { useState } from "react";
import "./QueriesCertificates.css";

const sershCertificateSena = process.env.REACT_APP_SERSH_CERTIFICATE_SENA;

const QueriesCertificates = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const CC = document.getElementById("inputQC").value;

    if (CC) {
      try {
        const response = await fetch(`${sershCertificateSena}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ CC }),
        });

        if (!response.ok) {
          throw new Error("Error al realizar la consulta.");
        }

        const responseData = await response.json();
        setData(responseData);
        setError("");

      } catch (error) {
        setError(error.message || "Error al realizar la consulta.");
      }
    } else {
      setError("Por favor, ingrese un número de documento.");
    }
  };

  return (
    <div className="container certificate-body mb-5">
      <div className="certificate">
        <h3>Consulta de Certificados</h3>
      </div>
      <form id="formConsultationCertificate" onSubmit={handleSubmit}>
        <div className="row g-2">
          <div className="col-md-5">
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="inputQC"
                placeholder="Número de documento"
              />
              <label htmlFor="inputQC">Número de documento</label>
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
                <th>Fecha Emisión</th>
                <th>Fecha Vencimiento</th>
                <th>Alcance</th>
                <th>Versión</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.NRO}</td>
                  <td>{item.FechaEmi}</td>
                  <td>{item.FechaVen}</td>
                  <td>{item.Alc}</td>
                  <td>{item.version}</td>
                  <td>{item.Edo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export { QueriesCertificates };
