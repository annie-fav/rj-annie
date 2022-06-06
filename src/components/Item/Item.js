

const Item = ({item}) => {
    
    
    return(
       <div className="cards_container">
        <div className="card">
            <img className="card_img" src={item.img}/>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button className="add-cart">Add to Cart</button>
        </div>
       </div>
    )
}

export default Item