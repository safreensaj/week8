import { useParams } from "react-router-dom";
function StudentDetails(){
    const {id} =useParams();
    return (
        <div>
            <h1>Student id: {id}</h1>
        </div>
    )
}
export default StudentDetails;


// import { Routes,Route } from "react-router-dom";
// import StudentDetails from "./Day4/components/StudentDetails";
// function App(){

//   return (
//     <Routes>
//       <Route path="/students/:id" element={<StudentDetails/>}/>
//     </Routes>
//   )
// }
// export default App;

