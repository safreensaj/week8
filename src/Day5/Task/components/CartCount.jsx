import { useContext } from "react";
import { cartContext } from "../context/CartContext";
function CartCount(){
    const {cart,setCart}=useContext(cartContext)
    return (
        <div>
<h1>Cart Count: {cart}</h1>
<button onClick={()=>setCart(cart+1)}>ADD TO CART</button>
        </div>
    )
}
export default CartCount;