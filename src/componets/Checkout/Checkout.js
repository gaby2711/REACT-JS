import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../componets/cartContext/cartContex"
import { db } from "../../firebase/firebase"

import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)
    const [nombre, setNombre] = useState ("")
    const [phone, setPhone] =useState ("")
    const [email, setEmail] = useState ("")

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name: nombre,
                    phone: phone,
                    email:email
                },
                items: cart,
                total
            }

            const batch = writeBatch(db)

            const ids = cart.map(prod => prod.id)
            console.log(ids)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

        
            const productsAddedToCartFromFirestore = await getDocs(productsRef)
            const { docs } = productsAddedToCartFromFirestore

            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                const { id } = orderAdded
                setOrderId(id)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 5000)

                console.log(id)
            } else {
                console.error('hay productos fuera de stock')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }


    }
    
    if(loading) {
        return <h1>Generando orden...</h1>
    }

    if(orderId) {
        return (
            <div>
                <h1>El Id de su compra es: {orderId}</h1>
            </div>
        )
    }

   

    return (
        <div >
            <h1 className="d-flex justify-content-center">Checkout</h1>
            
        <form className="container" onSubmit={createOrder}>
            <div className="row row-cols-1">
              <div className="col p-2 d-flex justify-content-center">
                <input type="text"  onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required/>
            </div>
            <div className="col p-2 d-flex justify-content-center">
                <input type="text" onChange={(e) => setPhone(e.target.value)} placeholder="phone" required/>
            </div>
            <div className="col p-2 d-flex justify-content-center">
                <input type="text"  onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
            </div>
          
             <button className="btn d-flex justify-content-center">Generar orden</button>
        </div>
      </form>
           
        </div>
        
    )
}

export default Checkout
