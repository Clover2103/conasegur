import React, { useState } from 'react';
import { FileText, Folder, BookOpen, Layers } from 'lucide-react';
import { QueriesDiplomas } from '../../components/QueriesDiplomas';
import { QueriesCertificates } from '../../components/QueriesCertificates';
import { QueriesAgreement } from '../../components/QueriesAgreement';
import { QueriesVD } from '../../components/QueriesVD';
import { QueriesConferences } from '../../components/QueriesConferences/indes';
import './Queries.css';


const NavItem = ({ icon: Icon, label, value, isSelected, onClick }) => {
  // Aplicamos la clase 'selected' si es true
  const className = `nav-item ${isSelected ? 'selected' : ''}`;
  
  return (
    <div
      className={className}
      onClick={() => onClick(value)}
      role="button"
      aria-pressed={isSelected}
      aria-label={`Seleccionar ${label}`}
    >
      <Icon className="icon" />
      <label>{label}</label>
    </div>
  );
};

const ConsultationSelect = ({ selectedValue, onSelectChange }) => {
  const navItems = [
    { value: 'diplomas', label: 'Diplomas', icon: FileText },
    { value: 'sena', label: 'Certificado Sena', icon: Folder },
    { value: 'convenios', label: 'Convenios', icon: BookOpen },
    { value: 'vd', label: 'Dia del vigilante', icon: BookOpen },
    { value: 'conferencias', label: 'Conferencias', icon: BookOpen },
  ];

  return (
    <div className="consultation-nav-bar"> 
      {navItems.map((item) => (
        <NavItem
          key={item.value}
          {...item}
          isSelected={selectedValue === item.value}
          onClick={onSelectChange}
        />
      ))}
    </div>
  );
};

const Queries = () => {
  // Estado inicializado a 'certificado'
  const [selectedOption, setSelectedOption] = useState('certificado');

  const handleSelectChange = (value) => {
    console.log("Opción seleccionada:", value);
    setSelectedOption(value);
  };

  return ( 
    <div className="consultation-app">

      <div className="consultation-wrapper">
        
        {/* Encabezado */}
        <h1 className="app-header">
            <Layers className="icon" />
            Panel de Consulta
        </h1>
        
        {/* Componente de Navegación (ConsultationSelect) */}
        <ConsultationSelect 
            selectedValue={selectedOption} 
            onSelectChange={handleSelectChange} 
        />
        
        {/* Contenido Dinámico (Renderizado Condicional) */}
        <section className="content-container">
            {selectedOption === 'diplomas' && <QueriesDiplomas />}
            {selectedOption === 'sena' && <QueriesCertificates />}
            {selectedOption === 'convenios' && <QueriesAgreement />}
            {selectedOption === 'vd' && <QueriesVD />}
            {selectedOption === 'conferencias' && <QueriesConferences />}
        </section>
        
      </div>
    </div>
  );
};

export { Queries };