import React from "react";
import { QueriesVD2019 } from "../QueriesVD2019";
import { QueriesVD2020 } from "../QueriesVD2020";
import "./QueriesVD.css";

const QueriesVD = () => {
  return (
    <div className="bodyHomeVD">
      <div className="container">
        <div className="row g-2 w-100 pt-5 pb-5">
          <div className="col-md text-center contentVD">
            <div>
              <h2>Dia del vigilante 2019</h2>
              <p className="px-5">«La vigilancia es una actividad que requiere de tiempo y dedicación, pero sobre todo de actitud y disposición de servicio para poder desarrollar su principal objetivo que es mantener la vida e integridad de las personas, y facilitar el ejercicio de los derechos y libertades ciudadanas. «</p>
            </div>
            <div className="contPhotoVD">
              <QueriesVD2019 />
            </div>
          </div>
          <div className="col-md text-center contentVD">
            <div>
              <h2>Dia del vigilante 2020</h2>
              <p className="px-5">En la ceremonia «Luis Enrique Larrota Bautista» se condecoro al personal destacado por el día del guarda. Exaltamos las labores prestadas y su constante gestión a la convivencia ciudadana desde el sector d Vigilancia y Seguridad Privada, resaltamos sus principios y valores como baluarte de su responsabilidad social en preocupara del crecimiento organizacional y de un mejor país.</p>
            </div>
            <div className="contPhotoVD">
              <QueriesVD2020 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { QueriesVD };