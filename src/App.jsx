 import Login from "./Project/Pages/Login";
 import Products from "./Project/Pages/Products";
 import { Routes,Route } from "react-router-dom";
 import ProtuctedRoute from "./Project/components/ProtectedRoute";
 import ProductDetails from "./Project/Pages/ProductDetails";
 import Cart from "./Project/Pages/Cart";
function App(){
  return (
    <Routes>
<Route path="/" element={<Login/>}/>
<Route path="/products" element={
  <ProtuctedRoute>
    <Products/>
  </ProtuctedRoute>
}/>
<Route path="/products/:id" element={<ProductDetails/>}/>
<Route path="/cart" element={<Cart/>}/>
    </Routes>
      )
}
export default App;