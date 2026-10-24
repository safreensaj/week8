import React from 'react'
import { useNavigate } from 'react-router-dom'
function Login({setIsLoggedIn}) {
    const navigate=useNavigate()
  return (
    <div>
        <h1>Login Page</h1>
        <button onClick={()=>{
            setIsLoggedIn(true)
            navigate("/dashboard")
        }}>Login</button>
    </div>
  )
}

export default Login