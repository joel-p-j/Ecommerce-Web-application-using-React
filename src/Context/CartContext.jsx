import { createContext, useEffect, useState } from "react";


export const CartContext=createContext()

export const CartProvider=({children})=>{
    const [orders,setOrders]=useState(JSON.parse(localStorage.getItem('orders'))||[])

    useEffect(()=>{
        localStorage.setItem('orders',JSON.stringify(orders))
    },[orders])

    const [cart,setCart]=useState(JSON.parse(localStorage.getItem('cartItems'))||[])

    useEffect(()=>{
        localStorage.setItem('cartItems',JSON.stringify(cart))
    },[cart])

    return(
        <CartContext.Provider value={{cart,setCart,orders,setOrders}}>
            {children}
        </CartContext.Provider>
    )
}
