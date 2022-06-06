import { configure } from "@testing-library/react";
import { useEffect, useState } from "react";
import Productos from '../../Mock/data';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom"


export const ItemListContainer = (props) => {
    const { greeting = 'Hiii' } = props;

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryID = 0 } = useParams();
    console.log(categoryID);
    
    const pedirDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve(Productos)

            }, 2000)
        })
    }

    useEffect(() => {
        setLoading(true)

    pedirDatos(true)
         .then((res) => {
             if (!categoryID) {
                setItems(res)
             } else {
                 setItems(res.filter((item) => item.category === categoryID ))
             }
         })
         .catch((error) => {
             console.log('ERRROR', error);
         })
         .finally(() => {
            setLoading(false)
         })
     }, [categoryID])



     // ===============================================

    return (
        <section>
            <p className="pWelcome">{ greeting }</p>
            {loading && (<div>Loading...</div>)}
            {!loading && (<div>
                {items.length && <ItemList items={items} />}
            </div>)}
        </section>
    )
}

