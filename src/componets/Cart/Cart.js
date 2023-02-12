import { useContext } from "react"
import { CartContext } from "../cartContext/cartContex"
import CartList from "../CartList/CarList"
const Cart = ()=>{
    const {cart} = useContext(CartContext)
    return(
        <div>
        <h1>Estos son los productos de tu carrito</h1>
        <CartList cart={cart}/>
        </div>
    )
}

export default Cart