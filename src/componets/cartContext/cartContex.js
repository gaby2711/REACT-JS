import { useState, createContext } from "react"


export const CartContext = createContext({
  cart: []
})



export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart(prev => {
            return [...prev, productToAdd]
          })
        } 
    }

    const isInCart = (id) => {
    return  cart.some(prod => id === prod.id)
    }

    const removeItem= (id) =>{
      const cartUdpdated = cart.filter(prod => prod.id !== id)
      setCart(cartUdpdated)
    }
    const getTotalQuantity = () => {
        let accu = 0

    cart.forEach(prod => {
        accu += prod.quantity
    })

    return accu
    }

    const totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider value={{addItem, cart, totalQuantity,removeItem}}>
            { children }
        </CartContext.Provider>
    )
}