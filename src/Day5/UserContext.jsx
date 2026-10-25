import { createContext,useState } from "react";
export const UserContext=createContext();
export function UserProvider({children}){
    const [user, setUser] = useState("safreen");
    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}


// import { UserProvider } from "./Day5/UserContext"
// import Profile from "./Day5/Profile"
// import NavBar from "./Day5/NavBar"
// function App() {
//   return (
//     <div>
//       <UserProvider>
//         <Profile/>
//         <NavBar/>
//       </UserProvider>
//     </div>
//   )
// }

// export default App