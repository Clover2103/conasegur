import React from 'react';
import { HomeSlider } from '../../components/HomeSlider';
import { HomeAboutUs } from '../../components/HomeAboutUs';
import { HomeMAndV } from '../../components/HomeMAndV';

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeAboutUs />
      <HomeMAndV />
    </div>
  );
};

export { Home };