// import { useEffect, useState } from "react";

// export const PokeApi = () => {

//   const [pokemon, setPokemon] = useState(null);
//   const [id, setId] = useState(1)

//   const handleAnterior = () => {
//      id > 1 && setId (id - 1)
//   }

//   const handleSiguiente = () => {
//       setId(id + 1)
//   }

//   console.log(id);

//   const handelInput = (e) => {
//     fetch('http://pokeapi.co/api/v2/pokemon/${id}')
//     .then((resp) => { resp.json()
//     .then((data) => {
//         setPokemon(data);
//     })    


//    useEffect( () => {

//     fetch('http://pokeapi.co/api/v2/pokemon/${id}')
//         .then((resp) => { resp.json()
//         .then((data) => {
//             setPokemon(data);
//         })    
//         })  
 
//     }, [id])


//    return (
//      <div>
//          <h2>Poke API</h2>
//          <hr/>
                     
//                   <input type="text" /> 
//                   <hr/>

//                   <button onClick={handleAnterior}>Anterior</button>
//                   <button onClick={handleSiguiente}>Siguiente</button>

//                   <h3>{pokemon?.name}</h3>
//                   <img src={pokemon?.sprites.front_default} alt={pokemon.name} />
         
//      </div>
//    )
// }

