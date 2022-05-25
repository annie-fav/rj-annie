
// import { useState, useEffect } from "react"

// const Counter = () => {

  //  const [contador, setContador1] = useState(1) 

  //  const incrementar = () => {
  //   setContador1( contador + 1 )
  //  }

  // const [contador, setContador] = useState({
  //   contador: 1,
  //   fyh: new Date()
  // })

  // const incrementar = () => {
  //   setContador({
  //     contador: contador.contador + 1,
  //     fyh: new Date()
  //   })
  // } 

 
  // montaje + actualizacion
//   useEffect(() => {
//     // fetch()
//    console.log("Componente montado")
     
//  }, );

//solo en montaje
//    useEffect(() => {
//      // fetch()
//     console.log("Componente montado")
      
//   }, []);

// montaje + dependencia contador
//   useEffect(() => {
//    console.log("Contador actualizado ")

//    return () => {
//        console.log("se desmonto el counter")
//    }

//  }, [contador]);


// se  pueden hacer varios useEffect

//   useEffect(() => {
//     // fetch()
//    console.log("Contador1 actualizado ")
//  }, [contador1]);

//   useEffect(() => {
//     // fetch()
//    console.log("Contador2 actualizado ")
//  }, [contador2]);

//   useEffect(() => {
//     // fetch()
//    console.log("Actualizador contador ")
//  }, [contador1, contador2]);




//    return (
//        <div onClick={ incrementar }>
//  <hr/> 
//          <h2>Counter</h2>
        

//          <button onClick={incrementar}>Click Me</button> 
    
         
//          <h4>{contador.contador}</h4> 
//          {/* <p>FyH del ultimo click: {new Date().toLocaleString()}</p> */}
//          <p>FyH del ultimo click: {contador.fyh.toLocaleString()}</p>
//          <hr/> 
//        </div>
//    )
// }

// export default Counter