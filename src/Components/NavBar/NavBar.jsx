import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBarStyles.css';
import { Link } from 'react-router-dom';
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
        <Select onChange={handleChange}>
          <option value='/categoria/Billeteras'>Billeteras</option>
          <option value='/categoria/Carteraa'>Carteras</option>
          <option value='/categoria/Bolsos'>Bolsos</option>
        </Select>
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
