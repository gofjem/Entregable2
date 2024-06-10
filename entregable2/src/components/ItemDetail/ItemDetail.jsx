import React from 'react'
import { Box, Image,Text } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';

const ItemDetail = ({img,nombre,precio,stock,descripcion}) => {

    const onAdd=(quantity)=>{
        toast(`Agregaste ${quantity} Producto(s) al carro`)
    }

  return (
    <Box>
        <Image 
        src={img}
        boxSize='400px'
        w='50%'
        h='50%'
        float={'left'}
        />
        <Text as='b' m={5} padding={5}>{nombre}</Text>
        <Text fontWeight='bold' m={3}>$ {precio}</Text>
        <Text m={3}>Descripción: {descripcion}</Text>
        <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
        <ToastContainer/>
      
    </Box>
  )
}

export default ItemDetail
