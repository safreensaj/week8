import { CartContext } from "./Day5/Task/context/CartContext"
import CartCount from "./Day5/Task/components/CartCount"
import ProductCard from "./Day5/Task/components/ProductCard"
import { lazy,Suspense, useState } from "react"
const About=lazy(()=>import("./Day5/Task/pages/About"))
function App() {
  const [name,setName]=useState("Safreen")
  return (
    <div>
      <CartContext>
        <CartCount/>
      </CartContext>
      <Suspense fallback={<h1>Loading...</h1>}>
      <About/>
      </Suspense>
      <ProductCard name={name} setName={setName}/>
    </div>
  )
}

export default App