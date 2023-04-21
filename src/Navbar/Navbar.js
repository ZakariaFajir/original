import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ handleMenuClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    handleMenuClick();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <a href="#home" className="logo">
        <i className="bx bx-food-menu"></i>L'Original
      </a>
      <div
        className={`bx bx-menu ${isActive ? 'bx-x' : ''}`}
        id="menu-icon"
        onClick={handleClick}
      ></div>
      <ul className={`navbar ${isActive ? 'active' : ''}`}>
        <li>
          <a href="#home" className="home-active">
            Home
          </a>
        </li>
        <li>
          <a href="#categories">Categories</a>
        </li>
        <li>
          <a href="#foods">Foods</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
