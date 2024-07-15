import React, { useContext } from 'react'
import ItemCount from '../Item/ItemCount'
import Context from '../../Context/CartContext'


const ItemDetail = ({id, precio, nombre, stock, descripcion, img}) => {

    const {addItem} = useContext(Context)

    const onAdd = (quantity) => {
      const item = {
        id,
        nombre,
        precio
      }

      addItem(item, quantity)
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