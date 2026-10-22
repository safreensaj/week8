import { useCallback,useState } from "react";
function CallbackPractice(){
    const [count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        console.log("Hello Safreen");
    },[])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={handleClick}>Say hello</button>
        </div>
    )
}
export default CallbackPractice;


// import CallbackPractice from "./Day3/CallbackPractice";

// function App(){
//   return (
//     <div>
// <CallbackPractice/>
//     </div>
//   )
// }
// export default App;