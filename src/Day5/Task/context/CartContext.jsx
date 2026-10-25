import { createContext, useState } from "react";

export const cartContext=createContext();
export function CartContext({children}){
    const [cart,setCart]=useState(0)

    return (
        <div>
<cartContext.Provider value={{cart,setCart}}>
{children}
</cartContext.Provider>
        </div>
    )
}