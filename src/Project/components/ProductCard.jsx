import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({product}) {
    const { data, setData } = useContext(CartContext);
  return (
    <div className="product-card">
        <h2>{product.title}</h2>
        <p>Price: {product.price}</p>
        <img src={product.thumbnail} alt={product.title} width="150"/>
         <button onClick={()=>{
          setData([...data,product])
        }}>Add to Cart</button> 

        <Link to={`/products/${product.id}`}>
  View Details
</Link>
    </div>
  )
}

export default ProductCard