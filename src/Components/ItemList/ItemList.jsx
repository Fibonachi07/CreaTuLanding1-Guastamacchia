import React from 'react'
import Item from '../Item/Item'
import './ItemListStyle.css'

const ItemList = ({productos}) => {
  return (
    <div className='containerCards'>
        {productos.map((prod) => {
             return (
            <Item key={prod.id} {...prod}/>
             )
        })}
    </div>
  )
}

export default ItemList