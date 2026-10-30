import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";

function ProductDetails() {
  const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
  const {id} =useParams()
  useEffect(()=>{
    
    async function fetchProducts(){
      try{
       const response=await fetch(
         `https://dummyjson.com/products/${id}`
       )
       if(!response.ok){
        throw new Error("Failed to fetch")
       }
       const data=await response.json()
       setProduct(data)
      }catch(error){
        setError("something went wrong")
      }finally{
        setLoading(false)
      }
    }
    fetchProducts()
  },[id])
  if(loading){
    return <h1>Loading...</h1>
  }
    if(error){
      return <h1>{error}</h1>
  }
  return (
    <div className="product-details">
      <h2>Product id : {id}</h2>
      <h1>{product.title}</h1>
      <img className="details-image" src={product.thumbnail} alt={product.title}/> 
      <p>{product.price}</p>
       <p>{product.description}</p>
        <p>Rating: {product.rating}</p>

    </div>
  )
}

export default ProductDetails