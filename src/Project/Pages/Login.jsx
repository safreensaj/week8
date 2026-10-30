import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext)
    const navigate=useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        if(email === "" || password === "" ){
          alert("pls fill email and passeord")
        }else{
           setIsLoggedIn(true)
            navigate("/products")
        }
    }
    return (
         <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <br/><br/>
                <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <br/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Login;