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
    const getTotal = () => {
      let total = 0

      cart.forEach(prod => {
        total += prod.quantity * prod.price
      })

      return total
    }
    const total = getTotal()

    const clearCart = () => {
      setCart([])
    }

    const totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider value={{addItem, cart,isInCart, total,clearCart, totalQuantity,removeItem}}>
            { children }
        </CartContext.Provider>
    )
}