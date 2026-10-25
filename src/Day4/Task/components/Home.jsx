import { useNavigate } from "react-router-dom";
function Home(){
    const navigate=useNavigate()
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={()=>navigate("/products")}>view products</button>
        </div>
    )
}
export default Home;


// import { useState } from 'react'
// import { Routes,Route } from 'react-router-dom'
// import About from "./Day4/Task/components/About"
// import DashBoard from './Day4/Task/components/DashBoard'
// import Home from './Day4/Task/components/Home'
// import Products from "./Day4/Task/components/Products"
// import ProductDetails from "./Day4/Task/components/ProductDetails"
// import Login from './Day4/Task/components/Login'
// import ProtectedRoute from './Day4/Task/components/ProtectedRoute'

// function App() {
//   const [isLoggedIn,setIsLoggedIn]=useState(false)
//   return (
//     <div>
// <Routes>
//   <Route path='/' element={<Home/>} />
//   <Route path='/about' element={<About/>}/>
//   <Route path='/products' element={<Products/>}/>
//   <Route path='/products/:id' element={<ProductDetails/>}/>
//   <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
//   <Route path='/dashboard' element={<ProtectedRoute isLoggedIn={isLoggedIn}>
//     <DashBoard/>
//   </ProtectedRoute>
//   }
//   />
// </Routes>
//     </div>
//   )
// }

// export default App