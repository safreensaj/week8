import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const navigate=useNavigate();
    function handleSubmit(e){
e.preventDefault()
if(name==="admin" && password==="12345"){
    localStorage.setItem("isloggedIn","true")
    navigate("/dashboard")
}else{
    setError("invalid")
}
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit">login</button>
</form>
    </div>

  )
}

export default Login




// import Login from "./review/login"
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Dashboard from "./review/Dashboard"
// import ProtectedRoute from "./review/ProtectedRoute"
// function App() {
//   return (
//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Login/>}/>
//     <Route element={<ProtectedRoute/>}>
//     <Route path="/dashboard" element={<Dashboard/>}/>
//     </Route>
//   </Routes>
//   </BrowserRouter>
//   )
// }

// export default App