import { NavLink,  } from 'react-router-dom'
import "./Navbar.css"
import CartWidget from '../Cartwidget/CartWidget'
import { useNavigate } from 'react-router-dom'
import { CartContext } from "../cartContext/cartContex"
import { useContext } from 'react'

const NavBar = () => {

const navigate = useNavigate()

const {totalQuantity} = useContext(CartContext)

return (
    <nav className="NavBar" >
        <h3 onClick={() => navigate('/')}>My imports OM</h3>
        <div className="Categories">
        <NavLink to={`/category/hogar`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Hogar</NavLink>
        <NavLink to={`/category/ofertas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Ofertas</NavLink>
        </div>
        <CartWidget totalQuantity={totalQuantity}/>
    </nav>
)
}

export default NavBar