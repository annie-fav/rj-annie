import ItemCounter from "../ItemListContainer/ItemCount/ItemCount"
import Productos from "../../Mock/data"

const ItemList = ( {item} ) => {

return (    
    <div className="card">
        {
           item.map((item) => (
             <div key={item.id}>
             <h2>{item.name}</h2>
             <img>src={"imageURL"}</img>
             <h4>Price:{item.price}</h4>
             <ItemCounter/>
             </div>
          ))    

         }
     </div> 
        
)}
 
export default ItemList