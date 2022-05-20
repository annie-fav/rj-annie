import './Components/Navbar/Navbar.css'
import './App.css';
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import { Nosotros } from './Components/components'
import { ItemListContainer } from './Components/ItemListcontainer/ItemListContainer.js'
import { Container } from './Ejemplos/Container/Container.js'

function App() {
  
  const  profesor = {
    nombre: "annie",
    rol: "profesora de react"
  }

  const tutor = {
    nombre: "pepito",
    rol: "tutor de react"
  }



  return (
    <div className="App">
    
     <Navbar/>

     <Body/>

     <Container>
     <ItemListContainer nombre={profesor.nombre}/> 
     </Container>

     

     <Nosotros titulo={profesor.nombre} content={profesor.rol} />
     
     <Nosotros titulo="Hi world!" content="Este es otro contenido" />
  
     

    </div>
  );
}

export default App;
