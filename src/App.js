import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Categories from './Categories/Categories';
import About from './About/About';
import './App.css';
import Foods from './Foods/Foods';
import Footer from './Footer/Footer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Navbar handleMenuClick={handleMenuClick} />
      <Home />
      <Categories />
      <Foods />
      <About />
      <Footer />
    </div>
  );
};

export default App;
