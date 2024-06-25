import React from 'react';
import './ItemStyles.css';
import ItemCount from './ItemCount';

const Item = ({ id, nombre, precio, img, descripcion, stock }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Agregar ${quantity} items al carrito`);
  };

  return (
    <div key={id} className='container'>
      <h1 className='itemName'>{nombre}</h1>
      <img src={img} alt={nombre} />
      <p>{descripcion}</p>
      <p>${precio}</p>
      <p>Stock: {stock}</p>
      <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default Item;
