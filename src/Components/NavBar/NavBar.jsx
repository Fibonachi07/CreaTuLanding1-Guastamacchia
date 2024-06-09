import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBarStyles.css';

const NavBar = ({ onOptionChange }) => {
  return (
    <header>
      <nav>
        <img src="../src/assets/Letino-logo.png" alt="Letino-logo" />
        <select name="" id="menu" onChange={onOptionChange}>
          <option value="Billeteras">Billeteras</option>
          <option value="Carteras">Carteras</option>
          <option value="Bolsos">Bolsos</option>
        </select>
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
