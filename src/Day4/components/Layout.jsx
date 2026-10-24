import { Link, Outlet } from "react-router-dom";

function Layout(){
    return (
        <div>
            <h1>Student management App</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"students/15"}>Student Details</Link>
            <Outlet/>
        </div>
    )
}
export default Layout;


// import { Routes,Route } from "react-router-dom";
// import NotFound from "./Day4/components/NotFound";
// import StudentDetails from "./Day4/components/StudentDetails"
// import Layout from "./Day4/components/Layout";
// import Home from "./Day4/components/Home";

// function App(){

//   return (
// <Routes>
//   <Route path="/" element={<Layout/>}>
//   <Route index element={<Home/>}/>
//     <Route
//         path="students/:id"
//         element={<StudentDetails />}
//     />
// </Route>
//     <Route
//         path="*"
//         element={<NotFound />}
//     />
// </Routes>
//   )
// }
// export default App;

