import React from 'react';
import { HomeSlider } from '../../components/HomeSlider';
import { HomeAboutUs } from '../../components/HomeAboutUs';
import { HomeMAndV } from '../../components/HomeMAndV';
import { HomeAwards } from '../../components/HomeAwards';

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeAboutUs />
      <HomeMAndV />
      <HomeAwards />
    </div>
  );
};

export { Home };