
import { useState, useEffect } from "react"

const ItemCounter = ({ stock = 10, initial = 1 }) => {
    // props.stock
    // props.iniital
    const [contador, setContador] = useState(Number(initial))

    const increment = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const decrement = () => {
        if (contador >= 1) {
            setContador(contador - 1)
        }
    }

    return (
        <>
           
            <div className="div-count">
                <button className="button-count-decrement" onClick={decrement}>-</button>
                <p className="p-button-count">{contador}</p>
                <button className="button-count-increment" onClick={increment}>+</button>
            </div>

            {contador === stock && (
                <p className="p-stock">Stock limit</p>
            )}

            <br />
            <br />
            <hr />
        </>
    )
}


export default ItemCounter