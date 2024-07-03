import React from 'react'
import ItemCount from '../Item/ItemCount'


const ItemDetail = ({id, precio, nombre, stock, descripcion, img}) => {

    const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} al carrito`)
    }
  return (
    <div key={id} className='container'>
      <h1 className='itemName'>{nombre}</h1>
      <img src={img} alt={nombre} />
      <p className='stock'>Stock: {stock}</p>
      <p>{descripcion}</p>
      <p>$ {precio}</p>
      <ItemCount stock={stock} initial={1} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail