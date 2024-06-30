import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBarStyles.css';
import { useNavigate } from 'react-router-dom';
import { Select } from '@chakra-ui/react'

const NavBar = () => {
  const navigate = useNavigate();
 const handleChange = (event) => {
  navigate(event.target.value);

 };
  return (
    <header>
      <nav>
        <img src="../src/assets/Letino-logo.png" alt="Letino-logo" />
        <select className='Select' onChange={handleChange}>
          <option value='/categoria/Billeteras'>Billeteras</option>
          <option value='/categoria/Carteras'>Carteras</option>
          <option value='/categoria/Bolsos'>Bolsos</option>
        </select>
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
