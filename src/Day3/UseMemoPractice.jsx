import { useMemo,useState } from "react";
function UseMemoPractice(){
    const [number,setNumber]=useState(2);
    const result=useMemo(()=>{
        console.log("Calculating...",number);
        return number*number;
    },[number])
    return (
        <div>
<h1>{result}</h1>
<button onClick={()=>setNumber(number+1)}>Click</button>
        </div>
    )
}
export default UseMemoPractice;


// import UseMemoPractice from "./Day3/UseMemoPractice";
// function App(){
//   return (
//     <div>
// <UseMemoPractice/>
//     </div>
//   )
// }
// export default App;