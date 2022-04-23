import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
      <NavBar/>

      <ItemListContainer greeting='Bienvenido a Tienda Dell´Acqua'></ItemListContainer>

    </>
  );
}

export default App;
