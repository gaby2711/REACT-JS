import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../cartContext/cartContex"


const ItemDetail = ({id, nombre, img,precio, category,stock}) =>{
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity)

        setQuantity(parseInt(quantity))

        addItem({ id, nombre, quantity, precio })
    }

    return(
        <div className="tarjeta-item">
            <p>{category}</p>
            <h4 className="titulo-item">{nombre}</h4>
            <img src={img} alt={nombre} className="imagen-item"/>
            <p className="precio-item">${precio}</p>
            {
                    quantity > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd} />
                    )
                }
            
        </div>
    )
}

export default ItemDetail