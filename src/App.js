import './Components/Navbar/Navbar.css'
import './App.css'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import { Nosotros } from './Components/components'
import { ItemListContainer } from './Components/ItemListcontainer/ItemListContainer.js'
import { Container } from './Ejemplos/Container/Container.js'

function App() {


  return (
    <div className="App">
    
     <Navbar/>

     <Body/>

     <ItemListContainer greeting={'Welcome!'} /> 
     

    </div>
  );
}

export default App;
