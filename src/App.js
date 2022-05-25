import './Components/Navbar/Navbar.css'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body'
import { ItemListContainer } from './Components/ItemListcontainer/ItemListContainer'
import Counter from './Ejemplos/Container/Counter/Counter'
import { useState } from 'react'

function App() {

  const [mostrar, setMostrar] = useState(true)

  const mostrarCounter = () => {
    setMostrar(!mostrar)
  }

  return (
    <div className="App">
    
     <Navbar/>

     <Body/>

     <ItemListContainer greeting={'Welcome!'} /> 
     
     <button onClick= {mostrarCounter}>Mostrar/Ocultar</button>

     {
       mostrar ?  <Counter/>  : <div></div>
     }

      
    
    </div>
  );
}

export default App;
