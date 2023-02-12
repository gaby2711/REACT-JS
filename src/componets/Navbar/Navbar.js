import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav style={{ display: "flex", justifyContent: "space-around" , alignItems: "center"}}>
            <h1>MyImports</h1>
            <div>
                <Link to ="/category/Hogar" style={{margin: 10}}>Hogar</Link>
                <Link to ="/category/Ofertas">Ofertas</Link>
            </div>
        </nav>
    )
}

export default Navbar