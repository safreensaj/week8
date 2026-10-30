import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Cart() {
    const {data,setData}=useContext(CartContext)
     console.log("Cart page data:", data);
     const totalPrice = data.reduce(
  (total, product) => total + product.price,
  0
);
  return (
    <div className="cart-container">
      <h1>My Cart page</h1>
      <h2>CArt Data : {data.length}</h2>
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>

   {data.map((product)=>(
    
    <div className="cart-item" key={product.id}>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <img src={product.thumbnail} alt={product.title} width="100"/>
        <button className="remove-btn" onClick={()=>{
            const updatedData=data.filter((item)=>item.id!==product.id);
            setData(updatedData)
        }}>Remove</button>
        </div>
   ))}
    </div>
  )
}

export default Cart