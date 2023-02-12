import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        document.title = 'Detalle del producto'
    }, [])

    useEffect(() => {
        (async ()=>{
        const productRef = doc(db, "products", productId)
        
        try{

        
        const snapshot = await getDoc(productRef)
        
        const fields = snapshot.data()
        const productsAdapted = {id: snapshot.id, ...fields}
            setProduct(productsAdapted)
        } catch(error){
            console.log(error);
        }finally{
            setLoading(false)
        }

        })()
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <h1>Detalle {product.name}</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer