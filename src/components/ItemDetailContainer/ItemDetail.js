import { useNavigate } from "react-router-dom"



const ItemDetail = ({item}) => {
    
    const Navigate = useNavigate;

    const handleBack = () => {
            Navigate(-1);
    }

    return(

        <div>
            <h2>{item.name}</h2>
            <img src={item.img}/>
            <p>{item.price}</p>
            <button onClick={handleBack}>Back</button>
        </div>
    )
}

export default ItemDetail