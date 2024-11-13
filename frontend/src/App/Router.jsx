import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Preview } from '../pages/Preview';
import { Home } from '../pages/Home';
import { Training } from '../pages/Training';
import { Queries } from '../pages/Queries';
import { Contacte } from '../pages/Contacte';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { NavBarResponsive } from '../components/NavBarResponsive';
import { Modal } from '../components/Modal';
import { RedesFlotantes } from '../components/Redes';

const RouterPages = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 790);
  const location = useLocation();

  const showModal = (content) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
    setModalContent(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {location.pathname !== "/" && (
        isMobile ? 
          <NavBarResponsive /> : 
          <NavBar />
      )}
      {location.pathname !== "/" && <RedesFlotantes />}
      <Routes>
        <Route path='/' element={<Preview />} />
        <Route path='/home' element={<Home showModal={showModal}/>} />
        <Route path='/training' element={<Training />} />
        <Route path='/queries' element={<Queries  showModal={showModal}/>} />
        <Route path='/contacte' element={<Contacte />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
      <Modal isVisible={isModalVisible} hideModal={hideModal} content={modalContent} />
    </div>
  );
};

export { RouterPages };