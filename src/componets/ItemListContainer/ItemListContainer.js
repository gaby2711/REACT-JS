import { useState,useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asycnMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

const ItemLisContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    
    const {categoryId} = useParams()

    useEffect(()=>{
        const asycnFuntion = categoryId ? getProductsByCategory : getProducts

        asycnFuntion(categoryId)
            .then(products =>{
                setProducts(products)
        })
        .catch(error =>{
            console.log(error);
        })
    }, [categoryId])
    
    
    
    return( 
    <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    </div>
    )
}
export default ItemLisContainer
