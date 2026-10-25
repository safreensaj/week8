import { useContext } from "react";
import { UserContext } from "./UserContext";

function NavBar() {
    const {user,setUser}=useContext(UserContext)
  return (
    <div>
        <h1>Welcome, {user}</h1>
        <button onClick={()=>setUser("Manu")}>change name</button>
    </div>
  )
}

export default NavBar


