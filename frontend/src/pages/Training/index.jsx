import React from 'react';
import { TrainingBody } from '../../components/TrainingBody';

const Training = ({ showModal }) => {
  return (
    <div>
      <TrainingBody showModal={showModal}/>
    </div>
  );
}

export { Training };