import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
function Products(){
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("")
    const [search,setSearch]=useState("")
    useEffect(()=>{
async function fetchProducts() {
    setLoading(true)
    setError("")
   try{
    const response= await fetch(
        `https://dummyjson.com/products`
    )
    if(!response.ok){
        throw new Error("Failed to fetch")
    }
   const data= await response.json()
   setProducts(data.products)
   }catch(error){
    setError("Something went wrong")
   }finally{setLoading(false)
}
}
fetchProducts()
    },[])
    if(loading){
        return <h2>Loading....</h2>
    }
    if(error){
        return <p>{error}</p>
    }
    const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
);
return (
  <div className="products-page">

    <h1 className="products-title">Products Page</h1>

    <div className="products-toolbar">
      <Link to="/cart" className="cart-link">
        Go to Cart
      </Link>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    <p className="product-count">
      {filteredProducts.length} Products
    </p>

    {filteredProducts.length === 0 ? (
      <p>No Products found</p>
    ) : (
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )}

  </div>
);
}
export default Products;