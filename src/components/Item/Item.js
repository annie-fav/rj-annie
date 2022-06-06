

const Item = ({item}) => {
    
    
    return(

        <div>
            <h2>{item.name}</h2>
            <img src={item.img}/>
            <p>{item.price}</p>
        </div>
    )
}

export default Item