import { Box } from '@chakra-ui/react';
import React from 'react'
import { TiShoppingCart } from "react-icons/ti";


const CartWidget = () => {
  return (
    <Box m={3}>
      <TiShoppingCart color='White' size={30}/>

    </Box>
  )
}

export default CartWidget
