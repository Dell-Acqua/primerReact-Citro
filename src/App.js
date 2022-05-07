import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting='Bienvenido a Tienda Dell´Acqua'></ItemListContainer>}/>
      <Route path='/productos/*' element={<ItemList/>}/>
      <Route path='item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
      

      

    </>
  );
}

export default App;
