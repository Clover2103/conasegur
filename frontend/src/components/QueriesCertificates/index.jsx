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
  
        const responseData = await response.json();
  
        if (response.ok && responseData.status === "success") {
          setData(responseData.data[0]); // Accede al primer resultado
          setError("");
        } else {
          setError(responseData.message || "Error al realizar la consulta.");
          setData(null);
        }
      } catch (error) {
        setError(error.message || "Error al realizar la consulta.");
        setData(null);
      }
    } else {
      setError("Por favor, ingrese un número de documento.");
    }
  };  

  return (
    <div className="container certificate-body mb-5">
      <div className="certificate">
        <h3>Consulta de Certificados SENA</h3>
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
      {data?.ruta && (
        <div className="certificate-container">
          <img
            src={data.ruta}
            alt="certificado sena"
            className="certificate-image"
          />
          <div className="watermark">
            CONFIDENCIAL CONFIDENCIAL<br/>
            CONFIDENCIAL CONFIDENCIAL<br/>
            CONFIDENCIAL CONFIDENCIAL<br/>
          </div>
        </div>
      )}

    </div>
  );
};

export { QueriesCertificates };
