import { Badge } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { LuShoppingCart } from "react-icons/lu";
import Context from '../../Context/CartContext';

const CartWidget = () => {

  const {getQuantity} = useContext(Context)
  return (
    <>
    <LuShoppingCart />
    <Badge borderRadius={'50%'} color={'#ffe4c4'} fontSize={'md'}>{getQuantity()}</Badge>
    </>
  )
}

export default CartWidget