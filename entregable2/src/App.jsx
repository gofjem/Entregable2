import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailProduct from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {

  return (
  <ChakraProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer title='Lo quieres, Lo tienes'/>} />
        <Route path='/categorias/:categoryId' element={<ItemListContainer title='Lo quieres, lo tienes'/>}/>
        <Route path='/producto/:productId' element={<ItemDetailProduct/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
        
    </BrowserRouter>
   
  </ChakraProvider>
  )
}

export default App

// 1:43
//1:15
//00:42:00