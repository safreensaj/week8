import { useRef,useState } from "react";

function RefPractice(){
    const [count,setCount]=useState(0)
    const countRef=useRef(0);
    function handleClick(){
    countRef.current=countRef.current+1;
    console.log(countRef.current)
    }
return (
    <div>
        <h1>UseRef Practice</h1>
        <button onClick={handleClick}>UseRef value</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>useState Count</button>
    </div>
)
}
export default RefPractice

// import RefPractice from "./Day3/RefPractice";

// function App(){

//   return (
//     <div>
// <RefPractice/>
//     </div>
//   )
// }
// export default App;