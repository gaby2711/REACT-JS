
const ItemDetail = ({id,nombre,img,precio, category, stock}) =>{
    return(
        <div>
        <h4>{nombre}</h4>
        <p>{category}</p>
        <img src={img} alt={nombre}/>
        <p>${precio}</p>
        </div>
    )
}

export default ItemDetail