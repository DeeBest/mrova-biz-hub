import { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import { Context } from './context/context';
import Foodies from './pages/foodies/Foodies';
import RoomsRentals from './pages/roomsRentals/RoomsRentals';
import Hygiene from './pages/hygiene/Hygiene';
import FinancialServices from './pages/financialServices/FinancialServices';
import FashionRoom from './pages/fashionRoom/FashionRoom';
import CarMechanics from './pages/carMechanics/CarMechanics';
import Error from './pages/error/Error';

function App() {
  const { isActive } = useContext(Context);

  return (
    <>
      <div className={isActive ? 'active overlay' : 'overlay'}></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foodies" element={<Foodies />} />
        <Route path="/rooms-rentals" element={<RoomsRentals />} />
        <Route path="/hygiene" element={<Hygiene />} />
        <Route path="/financial-services" element={<FinancialServices />} />
        <Route path="/fashion-room" element={<FashionRoom />} />
        <Route path="/car-mechanics" element={<CarMechanics />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
