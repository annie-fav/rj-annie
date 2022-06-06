import ItemCounter from "../ItemListContainer/ItemCount/ItemCount"
import Productos from "../../Mock/data"

const ItemList = ({ items }) => {

    return (
        <div className="card">
            {
                items.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <img alt="true" src={product.imageURL} />
                        <h4>Price:{product.price}</h4>
                        <ItemCounter />
                    </div>
                ))

            }
        </div>

    )
}

export default ItemList