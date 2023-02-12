import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../cartContext/cartContex"


const ItemDetail = ({id, nombre, img,precio, category,stock}) =>{
    const [quantity, setQuantity] = useState (0)

    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        console.log(`Se agregaron al carrito ${quantity} ${nombre} con el id: ${id}`)
        const productoAdd ={
            id, nombre, precio, quantity
        }
        console.log(productoAdd);
            setQuantity(quantity)

            addItem({ id, nombre, precio, quantity})
    }

    return(
        <div className="tarjeta-item">
            <p>{category}</p>
            <h4 className="titulo-item">{nombre}</h4>
            <img src={img} alt={nombre} className="imagen-item"/>
            <p className="precio-item">${precio}</p>
            {
                isInCart(id)  ?(
                    <Link to='/cart'>Terminar Compra</Link>
                ) :(
                <ItemCount stock={stock} onAdd={handleOnAdd}/>
                )
            
            }
            
        </div>
    )
}

export default ItemDetail