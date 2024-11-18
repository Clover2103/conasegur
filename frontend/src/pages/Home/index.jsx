import React, { useEffect } from 'react';
import { HomeSlider } from '../../components/HomeSlider';
import { HomeAboutUs } from '../../components/HomeAboutUs';
import { HomeMAndV } from '../../components/HomeMAndV';
import { HomeGAndV } from '../../components/HomeGAndV';
import { HomeAwards } from '../../components/HomeAwards';
import { HomeBigCalendar } from '../../components/HomeBigCalendar';
import { HomeAllies } from '../../components/HomeAllies';

import image1 from '../../assets/home/modalHome/imagen1.png';
import image2 from '../../assets/home/modalHome/imagen2.png';
import image3 from '../../assets/home/modalHome/imagen3.png';
import image4 from '../../assets/home/modalHome/imagen4.png';
import image5 from '../../assets/home/modalHome/imagen5.png';
import image6 from '../../assets/home/modalHome/imagen6.png';

const imagesWithLinks = [
  { src: image1, link: "https://api.whatsapp.com/send?phone=573165294689" },
  { src: image2, link: "https://api.whatsapp.com/send?phone=573105610135" },
  { src: image3, link: "https://api.whatsapp.com/send?phone=573054009393" },
  { src: image4, link: "https://api.whatsapp.com/send?phone=573054009393" },
  { src: image5, link: "https://api.whatsapp.com/send?phone=573105610135" },
  { src: image6, link: "https://api.whatsapp.com/send?phone=573105610135" },
];

const Home = ({ showModal }) => {

  useEffect(() => {
    const imageShown = sessionStorage.getItem('imageShown');

    if (!imageShown) {
      const randomImage = imagesWithLinks[Math.floor(Math.random() * imagesWithLinks.length)];
      sessionStorage.setItem('imageShown', 'true');
      
      showModal(
        <a href={randomImage.link} target="_blank" rel="noopener noreferrer">
          <img src={randomImage.src} className='img-fluid'  alt="Imagen aleatoria" />
          <button className="w-100 btn btn-dark text-white ">CONOCER MAS</button>
        </a>
      );
    }
  }, [showModal]);

  return (
    <div>
      <HomeSlider />
      <HomeAboutUs showModal={showModal}/>
      <HomeMAndV />
      <HomeGAndV />
      <HomeAwards />
      <HomeBigCalendar />
      <HomeAllies />
    </div>
  );
};

export { Home };