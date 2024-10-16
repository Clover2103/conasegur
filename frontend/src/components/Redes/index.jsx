import React from "./Redes.css";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "./Redes.css";

const RedesFlotantes = () => {
    return (
    <div className="redes-flotantes">
        <div className="re-cont-flotantes">
            <div className="row con-re-float" title="Instagram">
                <a href="#" className="cl-p">
                    <FaTiktok />
                </a>
            </div>

            <div className="row con-re-float" title="Facebook">
                <a href="https://www.facebook.com/CognoseguridadBogota/?mibextid=LQQJ4d&_rdr" target="_blank" className="cl-p" >
                    <FaFacebook />
                </a>
            </div>

            <div className="row con-re-float" title="Tik Tok">
                <a href="https://www.instagram.com/cognoseguridad/?next=%2F" target="_blank" className="cl-p">
                    <FaInstagram className="redes-icon"/>
                </a>
            </div>

            <div className="row con-re-float" title="WhatsApp">
                <a href="https://wa.link/a2j3c0" target="_blank" className="cl-p">
                    <FaWhatsapp className="redes-icon"/>
                </a>
            </div>
        </div>
    </div>
    );
};

export { RedesFlotantes };

