import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { DotLoader } from 'react-spinners'
import { Flex } from '@chakra-ui/react'

const ItemDetailContainer = () => {

const [product, setProduct] = useState({})
const { productId } = useParams()
const [loading, setLoading] = useState(true)

useEffect(() => {
    getProductsById(productId)
    .then((data => setProduct(data))).finally(() => setLoading(false))
}, [])

  return (
    <Flex justify={'center'} align={'center'}>
        {loading ? <DotLoader color="#ffe4c4"/> : <ItemDetail {...product}></ItemDetail>}
    </Flex>
    

  )
}

export default ItemDetailContainer