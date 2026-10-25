import { useContext } from "react";
import { UserContext } from "./UserContext";


function Profile() {
    const {user,setUser}=useContext(UserContext)
  return (
    <div>
        <h1>Welcome {user}</h1>
        <button onClick={()=>setUser("Anu")}>change to Anu</button>
         <button onClick={()=>setUser("lena")}>change to lena</button>

    </div>
  )
}

export default Profile