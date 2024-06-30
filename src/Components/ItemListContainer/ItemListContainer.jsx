import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataProducts = categoryId ? await getProductsByCategory(categoryId) : await getProducts();
        setProductos(dataProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div className='mainContainer'>
      <h1>{title}</h1>
      <div className="productContainer">
        <ItemList productos={productos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
