import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { GiArchiveRegister } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import conasegur from "../../assets/Logo Conasegur.png";
import "./NavBarResponsive.css";

const NavBarResponsive = ( ) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navBarResponsive">
      <div className="navBarResponsive__header">
        <div className="navBarResponsive__logo">
          <div className="navBarResponsive__logo conasegur-logo-navbar">
            <Link to="/home">
              <img src={conasegur} alt="AIEX" />
            </Link>
          </div>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

      {isMenuOpen && (
        <div className="navBarResponsive__links">
          <Link to="/home" onClick={toggleMenu}>INICIO</Link>
          <Link to="/training" onClick={toggleMenu}>SERVICIOS</Link>
          <Link to="/queries" onClick={toggleMenu}>CONSULTAS</Link>
          <Link to="/contacte" onClick={toggleMenu}>CONTACTO</Link>
          <div className="btnFormRes">
            <button>
              <GiArchiveRegister /> FES 4.0
            </button>
            <button>
              <GiArchiveRegister /> TÉCNICO        
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { NavBarResponsive };
