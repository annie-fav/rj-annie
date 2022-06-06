import './Components/Navbar/Navbar.css'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import ItemCounter from './Components/ItemListContainer/ItemCount/ItemCount'
// import { PokeApi } from './Ejemplos/Container/PokeApi/PokeApi'
// import ItemList from './Components/ItemList/ItemList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {


  return (
    <>
      <Navbar />
      <Body />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'Welcome!'} />} />
        <Route path="/categorias/:categoryID" element={<ItemListContainer/>} />
        <Route path="/itemcounter" element = { <ItemCounter stock={10} initial={1} /> } /> 
      </Routes>
    </>
  );

}

export default App;
