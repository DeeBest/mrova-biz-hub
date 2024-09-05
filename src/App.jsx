import { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import { Context } from './context/context';

function App() {
  const { isActive } = useContext(Context);

  return (
    <>
      <div className={isActive ? 'active overlay' : 'overlay'}></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
