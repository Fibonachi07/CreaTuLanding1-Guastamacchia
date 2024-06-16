import React from 'react'
import './ItemStyles.css'

const Item = ({id, nombre, precio, img, descripcion, stock}) => {
  return (
    <div key={id} className='container'>
        <h1 className='itemName'>{nombre}</h1>
        <img src={img} alt="" />
        <p>{descripcion}</p>
        <p>${precio}</p>
        <p>Stock: {stock}</p>
    </div>
  )
}

export default Item