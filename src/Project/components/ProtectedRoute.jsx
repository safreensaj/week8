import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
function ProtuctedRoute({children}){
    const {isLoggedIn}=useContext(AuthContext)
    
    return isLoggedIn ? children : <Navigate to={'/'} replace />
        
    
}
export default ProtuctedRoute;