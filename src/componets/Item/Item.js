import { Link } from "react-router-dom"

const Item =({nombre, img, precio, id}) => {
    return(
        <div>
            <h1>{nombre}</h1>
            <img src={img} alt={nombre} style={{width: 100}}/>
            <p>$ {precio}</p>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item