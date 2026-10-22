import useFetch from "../hooks/useFetch"
function FetchProducts(){
const {data,loading,error}=useFetch("https://dummyjson.com/products")
if(loading){
    return <h2>Loading...</h2>
}
if(error){
    return <h2>{error}</h2>
}
    return (
        <div>
{data && data.products.map((product)=>(
    <div key={product.id}>
        <p>{product.title}</p>
<p>Price:$ {product.price}</p>
<p>Rating: {product.rating}</p>
    </div>
    ))}
    <h2>Total products: {data.products.length}</h2>
        </div>
    )
}
export default FetchProducts;