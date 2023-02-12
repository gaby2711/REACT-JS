import { NavLink,  } from 'react-router-dom'
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
        <NavLink to={`/category/Hogar`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Hogar</NavLink>
        <NavLink to={`/category/Ofertas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Ofertas</NavLink>
        </div>
        <CartWidget totalQuantity={totalQuantity}/>
    </nav>
)
}

export default NavBar