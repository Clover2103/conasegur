import React from "react";
import { Link } from 'react-router-dom';
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import isme from "../../assets/Logo ISME.png";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <div className="footer row g-3">

      <div className="cont-area col-md-4">

        <div className="cont-acred">
          <p>Auditado y verificado por: </p>
          <div className="cont-logo-footer">
            <img src={isme} alt="ISME" />
          </div>
        </div>

        <div className="redes">
          <div>
            <a href="https://www.tiktok.com/@vigiempleo.com" target="_blank">
              <FaTiktok className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/conasegur.conasegur/?locale=es_LA" target="_blank" className="cl-p" >
              <FaFacebook className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/conasegur.conasegur/" target="_blank" className="cl-p">
              <FaInstagram className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="https://api.whatsapp.com/send?phone=573144422577" target="_blank" className="cl-p">
              <FaWhatsapp className="red-icon"/>
            </a>
          </div>
        </div>

      </div>

      <div className="cont-area col-md-4">
        
        <div>
          <div>
            <p>NUESTRA UBICACIÓN</p>
            <div className="cont-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.371579082128!2d-74.0657423!3d4.6664427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b15468ef2f9%3A0x331dd5c04277df22!2sCONASEGUR!5e0!3m2!1ses-419!2sco!4v1729097872413!5m2!1ses-419!2sco" 
              width="300" 
              height="250"
            ></iframe>
            </div>
          </div>
        </div>
        <div>
          <p>© 2024 Conasegur FES4.0 Todos los derechos reservados.</p>
        </div>
      </div>

      <div className="cont-area col-md-4">
        <div className="cont-links">
          <p><Link to="/home#aboutUs">¿Quienes somos?</Link></p>
          <p><Link to="/curses">Nuestros cursos</Link></p>
          <p><Link to="/contact">Contactenos</Link></p>
          <p><Link to="/contact">Quejas / Apelaciones</Link></p>
          <p><Link to="/consultation">Consulta tu certificado</Link></p>
        </div>
      </div>
      
    </div>
  );
};

export { Footer };