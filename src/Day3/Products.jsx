import { useState,useEffect } from "react";
function Products(){
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("")
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(responds=>{
            if(!responds.ok){
                throw new Error("Failed to fetch data")
            }
            return responds.json();
        })
        .then(data=>{
            console.log(data)
            setProducts(data.products);
            setLoading(false)
        })
        .catch(()=>{
            setError("Something went wrong");
            setLoading(false)
        })
    },[])
 if(loading){
        return <h2>loading...</h2>
    }
    if(error){
        return <h2>{error}</h2>
    }
    return (
        <div>
            {products.map((product)=>(
               <div key={product.id}>
                <p>{product.title}</p>
                <p>{product.price}</p>
                </div>
            ))}
            <h2>Total products: {products.length}</h2>
        </div>
    )
}
export default Products;


// import Products from "./Day3/Products";
// function App(){
//   return (
//     <div>
// <Products/>
//     </div>
//   )
// }
// export default App;