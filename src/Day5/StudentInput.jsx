

function StudentInput({name,setName}) {
  return (
    <div>
        <h1>Student Input</h1>
        <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
    </div>
  )
}

export default StudentInput




import { useState } from "react"
import StudentInput from "./Day5/StudentInput"
import StudentDisplay from "./Day5/StudentDisplay"

// function App() {
//   const [name,setName]=useState("")
//   return (
//     <div>
//       <StudentInput name={name} setName={setName}/>
//       <StudentDisplay name={name}/>
//     </div>
//   )
// }

// export default App