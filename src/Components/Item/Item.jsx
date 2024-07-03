import React from 'react';
import './ItemStyles.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, img, stock}) => {

  return (
    <div key={id} className='container'>
      <h1 className='itemName'>{nombre}</h1>
      <img src={img} alt={nombre} />
      <p className='stock'>Stock: {stock}</p>
      <button className='Details'><Link to={`/producto/${id}`}>Ver detalles</Link></button>
    </div>
  );
};

export default Item;
