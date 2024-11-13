import React, { useState } from 'react';
import { QueriesSelect } from '../../components/QueriesSelect';
import { QueriesDiplomas } from '../../components/QueriesDiplomas';
import { QueriesCertificates } from '../../components/QueriesCertificates';
import { QueriesAgreement } from '../../components/QueriesAgreement';
import { QueriesVD } from '../../components/QueriesVD';
import { QueriesConferences } from '../../components/QueriesConferences/indes';
import './Queries.css';

const Queries = ({ showModal }) => {

  const [selectedOption, setSelectedOption] = useState('diplomas');

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  }

  return (
    <div>
      <QueriesSelect onSelectChange={handleSelectChange} />

      <div className={`diplomas-content ${selectedOption === 'diplomas' ? 'visible' : 'hidden'}`}>
        <QueriesDiplomas />
      </div>
      <div className={`certificados-content ${selectedOption === 'certificados' ? 'visible' : 'hidden'}`}>
        <QueriesCertificates />
      </div>
      <div className={`convenios-content ${selectedOption === 'convenios' ? 'visible' : 'hidden'}`}>
        <QueriesAgreement showModal={showModal}/>
      </div>
      <div className={`dia-vigilante-content ${selectedOption === 'dia-vigilante' ? 'visible' : 'hidden'}`}>
        <QueriesVD />
      </div>
      <div className={`dia-vigilante-content ${selectedOption === 'conferencias' ? 'visible' : 'hidden'}`}>
        <QueriesConferences />
      </div>
    </div>
  );
};

export { Queries };