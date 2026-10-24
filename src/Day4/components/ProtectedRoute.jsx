import { Navigate } from "react-router-dom";
function ProtectedRoute({isLoggedIn,children}){
if(!isLoggedIn){
    return <Navigate to={"/login"} replace />
}
return children
}
export default ProtectedRoute;


// import { Routes,Route } from "react-router-dom";
// import NotFound from "./Day4/components/NotFound";
// import Login from "./Day4/components/Login";
// import DashBoard from "./Day4/components/DashBoard";
// import ProtectedRoute from "./Day4/components/ProtectedRoute";
// import { useState } from "react";
// function App(){
// const [isLoggedIn,setIsLoggedIn]=useState(false)
//   return (
//     <Routes>
//         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />

//         <Route
//             path="/dashboard"
//             element={
//                 <ProtectedRoute isLoggedIn={isLoggedIn}>
//                     <DashBoard />
//                 </ProtectedRoute>
//             }
//         />

//         <Route path="*" element={<NotFound />} />
//     </Routes>
// );
  
// }
// export default App;

