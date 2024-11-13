import React from "react";
import { HomeValuesCard } from "../HomeValuesCard";
import { HomeGoalsCard } from "../HomeGoalsCard";
import "./HomeGAndV.css";


const HomeGAndV = () => {

  return (
    <div className="bodyHomeGAndV">
      <div className="container">
        <div className="row g-2 w-100 pt-5 pb-5">
          <div className="col-md">
            <h2>Valores</h2>
            <HomeValuesCard />
          </div>
          <div className="col-md">
            <h2>Objetivos</h2>
            <HomeGoalsCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export { HomeGAndV };