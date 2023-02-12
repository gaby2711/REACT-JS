const products =[
    {
    "id":1,
    "nombre":"Limador de Uñas",
    "category": "Ofertas",
    "stock":25,
    "precio":1200,
    "img": "https://http2.mlstatic.com/D_NQ_NP_687073-MLC52305800899_112022-W.jpg"
    },
    {
    "id":2,
    "nombre":"Reloj Inteligente",
    "category": "Ofertas",
    "stock":25,
    "precio":1200,
    "img": "https://startechoffice.cl/wp-content/uploads/2022/04/bH.jpg"
    },
    {
    "id":3,
    "nombre":"Carrito Organizador",
    "category": "Ofertas",
    "stock":25,
    "precio":1400,
    "img": "https://http2.mlstatic.com/D_NQ_NP_734394-MLC47417342111_092021-O.webps"
    },
    {
    "id":4,
    "nombre":"Aspiradora",
    "category": "Hogar",
    "stock":25,
    "precio":1300,
    "img": "https://http2.mlstatic.com/D_NQ_NP_997735-MLA45272046482_032021-O.jpg"
    } ,
    {
    "id":5,
    "nombre":"Humificador",
    "category": "Hogar",
    "stock":25,
    "precio":1300,
    "img": "https://http2.mlstatic.com/D_NQ_NP_752726-MLC46939589444_082021-O.webp"
    },
    {
    "id":6,
    "nombre":"Control Universal",
    "category": "Hogar",
    "stock":25,
    "precio":1300,
    "img": "https://cdnx.jumpseller.com/controlpro/image/14379455/3996_1-01.jpeg?1651016327"
    } 
    ,
    {
    "id":7,
    "nombre":"Control Universal",
    "category": "Hogar",
    "stock":25,
    "precio":1300,
    "img": "https://cdnx.jumpseller.com/controlpro/image/14379455/3996_1-01.jpeg?1651016327"
    }   
    ,
    {
    "id":8,
    "nombre":"Control Universal",
    "category": "Hogar",
    "stock":25,
    "precio":1300,
    "img": "https://cdnx.jumpseller.com/controlpro/image/14379455/3996_1-01.jpeg?1651016327"
    }     
]

export const getProducts = () =>{
return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve (products)
    }, 1000)
})
}


export const getProductsByCategory = (categoryId) => {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId))
    }, 500)
})
}

export const getProductById = (id) => {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find(prod => prod.id == id))
    }, 500)
})
}