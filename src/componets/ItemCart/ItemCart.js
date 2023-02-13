import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../cartContext/cartContex"


const ItemCart = ({nombre, precio,quantity,id }) =>{
    const {removeItem} = useContext(CartContext)
    return(
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <h3>{nombre}</h3>
            <h4>cantidad {quantity}</h4>
            <h4>precio: ${precio}</h4>
            <h4>subtotal ${precio * quantity}</h4>
            <button onClick={() =>removeItem(id)}>Eliminar</button>
            <Link to="/checkout">Checkout</Link>
        </div>
    )
}

export default ItemCart