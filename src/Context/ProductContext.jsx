import { createContext, useEffect, useState } from "react";


export const ProductContext=createContext()

export const ProductProvider=({children})=>{
    const [products,setProducts]=useState(JSON.parse(localStorage.getItem('products'))||[])

    useEffect(()=>{
        localStorage.setItem('products',JSON.stringify(products))
    },[products])

    return(
        <ProductContext.Provider value={{products,setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}