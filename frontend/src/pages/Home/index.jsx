import React from 'react';
import { HomeSlider } from '../../components/HomeSlider';
import { HomeAboutUs } from '../../components/HomeAboutUs';
import { HomeMAndV } from '../../components/HomeMAndV';
import { HomeGAndV } from '../../components/HomeGAndV';
import { HomeAwards } from '../../components/HomeAwards';
import { HomeBigCalendar } from '../../components/HomeBigCalendar';
import { HomeAllies } from '../../components/HomeAllies';

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeAboutUs />
      <HomeMAndV />
      <HomeGAndV />
      <HomeAwards />
      <HomeBigCalendar />
      <HomeAllies />
    </div>
  );
};

export { Home };