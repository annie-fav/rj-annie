import { useNavigate } from "react-router-dom"



const ItemDetail = ({item}) => {
    
    const Navigate = useNavigate;

    const handleBack = () => {
            Navigate(-1);
    }

    return(

        <div>
            <img className="card_img" src={item.img}/>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button onClick={handleBack}>Back</button>
        </div>
    )
}

export default ItemDetail