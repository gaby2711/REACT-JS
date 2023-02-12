import "./CartWidget.css"
import { Link } from "react-router-dom"

const CartWidget = ({ totalQuantity }) =>{
    return(
        <Link to="/cart/" className="CartWidget">
            <img src="https://emojis.wiki/emoji-pics/microsoft/shopping-cart-microsoft.png" alt="cart-widget" className="CartImg"/>
                { totalQuantity }
        </Link>
    )
}

export default CartWidget