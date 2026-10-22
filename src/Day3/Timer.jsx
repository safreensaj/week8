
import { useEffect,useState } from "react";

function Timer(){
    const [seconds,setSeconds]=useState(0)
    const [isRunning,setIsrunning]=useState(false)
    useEffect(()=>{
        if(!isRunning) return;
        const timer=setInterval(()=>{
            setSeconds(prev=>prev+1)
        },1000)
        return ()=>{clearInterval(timer)}
    },[isRunning])
    return (
        <div>
            <h1>{seconds}</h1>
            <button onClick={()=>setIsrunning(true)}>start</button>
             <button onClick={()=>setIsrunning(false)}>stop</button>
              <button onClick={()=>{
                setIsrunning(false); 
                setSeconds(0)}}>RESET</button>

        </div>
    )
}
export default Timer;


// import Timer from "./Day3/Timer";
// function App(){

//   return (
//     <div>
// <Timer/>
//     </div>
//   )
// }
// export default App;