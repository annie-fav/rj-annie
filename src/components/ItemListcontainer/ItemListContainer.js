import { useEffect, useState } from "react";
import Productos from '../../Mock/data';
import ItemList from '../ItemList/ItemList';


export const ItemListContainer = (props) => {

    const { greeting } = props;

    const [ algo, setAlgo] = useState(false)
    
    const handleAlgo = () => {
        setAlgo()
    }

    // Clase V

    const [item, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    
    const pedirDatos = (retornar) => {
        
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve(Productos)

            }, 3000)
        })
    }

    useEffect(() => {

    pedirDatos(true)
         .then((res) => {
             setItems(res)
         })
         .catch((error) => {
             console.log('ERRROR', error);
         })
         .finally(() => {
            setLoading(false)
         })
     }, [])



     // ===============================================

    return (
        <section>
            <p className="pWelcome">{ greeting }</p>
            <hr/>
            

        </section>

         

    )
}

