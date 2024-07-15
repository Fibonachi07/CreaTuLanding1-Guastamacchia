import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBarStyles.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
 const handleChange = (event) => {
  navigate(event.target.value);

 };
  return (
    <header>
      <nav>
        <Link to={`/`}><img src="../src/assets/Letino-logo.png" alt="Letino-logo" /></Link>
        <select className='Select' onChange={handleChange}>
        <option value='/'>Categorías</option>
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
