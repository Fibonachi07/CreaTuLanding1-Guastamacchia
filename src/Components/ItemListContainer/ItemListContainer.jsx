import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import { useParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import { Flex } from '@chakra-ui/react';

const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true)
    const dataProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()
    dataProducts.then((prod) => setProductos(prod)).finally(() => setLoading(false))
  }, [categoryId])

  return (
    <div className='mainContainer'>
      <div className="productContainer">
      <Flex justify={'center'} align={'center'}>
        { loading ? <DotLoader color="#ffe4c4" /> : <ItemList productos={productos} />}
      </Flex>
      </div>
    </div>
  );
};

export default ItemListContainer;
