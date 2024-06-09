import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({title}) => {
  return (
    <div className='mainContainer'>
      <h1>{title}</h1>
      <div className="productContainer">

      </div>
    </div>
  )
}

export default ItemListContainer