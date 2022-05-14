import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';
import CartProvider from './context/CartContext';


function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting='Bienvenido a Tienda Dell´Acqua'></ItemListContainer>}/>
      <Route path='/productos/*' element={<ItemList/>}/>
      <Route path='item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>

      

    </>
  );
}

export default App;
