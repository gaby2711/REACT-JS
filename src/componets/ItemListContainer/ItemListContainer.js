import { useState, useEffect } from 'react'
import Itemlist from "../ItemList/ItemList"
import { getDocs, collection,} from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products , setProducts] = useState([])
    const [loading , setLoanding] = useState(true)
    const {categoryId} = useParams ()

    useEffect(() =>{
        (async()=>{
        setLoanding(true)

        const collectionRef = collection(db, "products")
        try{
            const response = await getDocs(collectionRef)

            const productsAdapted = response.docs.map(doc=>{
                const fields = doc.data()

                return {id: doc.id, ...fields}
            })
            setProducts(productsAdapted)
        }catch (error){
            console.log(error);
        }finally{
            setLoanding(false)
        }
        })()
    }, [categoryId])

    if(loading){
        return <h1>Cargando productos...</h1>
    }

    return(
        <div className="ItemListContainer">
            <h1>{categoryId ? `Estos nuestros productos de la categoria ${categoryId}`: `estos son nuestros productos`}</h1>
            <Itemlist products={products} />
        </div>
    )
}

export default ItemListContainer
