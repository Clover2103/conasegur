import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Preview } from '../pages/Preview';
import { Home } from '../pages/Home';
import { Training } from '../pages/Training';
import { Queries } from '../pages/Queries';
import { Contacte } from '../pages/Contacte';

const RouterPages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Preview />} />
        <Route path='/home' element={<Home />} />
        <Route path='/training' element={<Training />} />
        <Route path='/queries' element={<Queries />} />
        <Route path='/contacte' element={<Contacte />} />
      </Routes>
    </div>
  );
};

export { RouterPages };