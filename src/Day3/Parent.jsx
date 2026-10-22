import { useCallback } from "react";
import { useState } from "react";
import Child from "./Child";
function Parent(){
    const [count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        console.log("Hello")
    },[]);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <Child onClick={handleClick}/>
        </div>
    )
}
export default Parent;


// import Parent from "./Day3/Parent";
// function App(){
//   return (
//     <div>
// <Parent/>
//     </div>
//   )
// }
// export default App;