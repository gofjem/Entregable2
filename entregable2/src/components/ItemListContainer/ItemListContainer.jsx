import React, { useEffect, useState } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { DotLoader } from 'react-spinners'


const ItemListContainer = ({title}) => {
  const [products, setProducts]=useState([])
  const {categoryId}=useParams()
  const [loading, setLoding]=useState(true)

  console.log(categoryId)
  
  useEffect(()=>{
    setLoding(true)
    const dataProductos= categoryId ? getProductsByCategory(categoryId): getProducts()
    dataProductos
      .then((data)=>setProducts(data))
      .catch((error)=>console.log(error))
      .finally(()=>setLoding(false))
  },[categoryId])

  console.log(products)

  return (
    <Flex direction={'column'} justify={'center'} padding={3} align={'center'}>
      <Heading color={'#171718'} mt={10}>{title}</Heading>
      {
        loading ?
        
        <Flex justify={'center'} align={'center'} h={'60vh'}>

          <DotLoader color="#111312" />

        </Flex>
        :
        <ItemList products={products}/>
      }
      
      
    </Flex>
  )
}

export default ItemListContainer
