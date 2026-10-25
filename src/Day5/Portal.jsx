import {createPortal} from "react-dom"
function Portal(){
    return createPortal(
        <h1>React Portal</h1>,
        document.getElementById("portal-root")
    )
}
export default Portal;


// import Portal from "./Day5/Portal"

// function App() {
//   return (
//     <div>
//       <h1>My App</h1>
//       <Portal />
//     </div>
//   )
// }

// export default App