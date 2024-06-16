import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../data/asyncMock'

const ItemListContainer = ({title}) => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProducts()
    .then((prod) => setProductos(prod))
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className='mainContainer'>
      <h1>{title}</h1>
    <div className="productContainer">
      <ItemList productos={productos} />
    </div>
    </div>
  )
}

export default ItemListContainer