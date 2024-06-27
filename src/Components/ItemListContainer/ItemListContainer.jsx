import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({title}) => {
  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const dataProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()

    dataProducts
    .then((prod) => setProductos(prod))
    .catch((err) => console.log(err))
  }, [categoryId])

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