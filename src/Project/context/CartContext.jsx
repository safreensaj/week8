import { createContext, useState } from "react";
export  const CartContext=createContext();
export function CartProvider({children}){
    const [data,setData]=useState([])
    return (
        <CartContext.Provider value={{data,setData}}>
          {children}
        </CartContext.Provider>
    )
}