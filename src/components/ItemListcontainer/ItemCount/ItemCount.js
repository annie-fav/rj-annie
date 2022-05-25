
import { useState, useEffect } from "react"

const ItemCounter = (stock, initial, onAdd) => {

    const [contador, setContador] = useState(1) 

    const incrementar = () => {
          setContador({
            contador: contador.contador + 1,
          })
        } 
          
        const decrecer = () => {
            setContador({
              contador: contador.contador + 1,
            })
          } 

    return (
               <div onClick={ incrementar }>
         <hr/> 
                 <h2>Counter</h2>
                
                 <div className="div-count">
                 <button className="button-count" onClick={incrementar}>+</button> 
                 <p>{contador.contador}</p> 
                 <button className="button-count" onClick={decrecer}>-</button> 
                 </div>

                 
                 <br/>
                 <br/>
                 <hr/>
               </div>
           )
        }


export default ItemCounter