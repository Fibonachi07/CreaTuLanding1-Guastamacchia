import React from 'react';
import useCounter from '../../hooks/useCounter';
import './ItemStyles.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, increment, decrement } = useCounter(initial, stock);

  return (
    <div className='buttonContainer'>
      <div className='counter'>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button className='addToCartBtn' onClick={() => onAdd(count)} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
