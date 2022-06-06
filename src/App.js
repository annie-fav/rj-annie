import './Components/Navbar/Navbar.css'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import ItemCounter from './Components/ItemListContainer/ItemCount/ItemCount'
// import { useState } from 'react'
import ItemList from './Components/ItemList/ItemList'


function App() {

  // const [mostrar, setMostrar] = useState(true)

  // // const mostrarCounter = () => {
  // //   setMostrar(!mostrar)
  // // }

  return (
    <div className="App">
    
     <Navbar/>

     <Body/>

     <ItemListContainer greeting={'Welcome!'} /> 

     <ItemList/>

     <ItemCounter stock={10} initial={1} />
      
    
    </div>
  );
}

export default App;
