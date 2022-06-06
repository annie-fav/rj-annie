import { useEffect, useState } from "react";
import Productos from '../../Mock/data';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom"

export const ItemDetailContainer = (props) => {


    const { greeting } = props;


    const [item, setItems] = useState([])
    const [loading, setLoading] = useState(true)


   const itemID = useParams();

    

    useEffect(() => {
        setLoading(true)

    pedirDatos(true)
         .then((res) => {
            setItem(res.find( (item) => item.id === Number(itemID) ))
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
            <p className="pWelcome">Item detail</p>
            <hr/>
            

        </section>

         

    )
}

