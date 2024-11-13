import React from "react";
import { Link } from 'react-router-dom';
import { GiArchiveRegister } from "react-icons/gi";
import conasegur from "../../assets/Logo Conasegur.png";
import "./NavBar.css";

const NavBar = ( ) => {

  return (
    <div className="navBar">
      <div className="navBarIzq gap-2">
        <div className="navBar__logo conasegur-logo-navbar">
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <img src={conasegur} alt="AIEX" />
          </Link>
        </div>
      </div>
      
      <div className="navBar__links gap-3">
        <Link to="/home">INICIO</Link>
        <Link to="/training">SERVICIOS</Link>
        <Link to="/queries">CONSULTAS</Link>
        <Link to="/contacte">CONTACTO</Link>
      </div>

      <div className="btnForm">
        <button>
          <GiArchiveRegister /> FES 4.0
        </button>
        <button>
          <GiArchiveRegister /> TÉCNICO        
        </button>
      </div>
    </div>
  );
};

export { NavBar };