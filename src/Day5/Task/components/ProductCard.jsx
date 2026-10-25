
import { memo } from "react"
function ProductCard({name,setName}) {
  return (
    <div>
        <h1>Product Card</h1>
        <h2>Welcome, {name}</h2>
        <button onClick={()=>setName("Manu")}>Change Name </button>
    </div>
  )
}

export default memo(ProductCard);