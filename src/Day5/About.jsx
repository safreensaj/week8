

function About() {
  return (
    <div>
        <h1>This is About Page</h1>
    </div>
  )
}

export default About


// import { lazy,Suspense,useState } from "react"
// const About=lazy(()=>import("./Day5/About"))
// function App() {
//   const [showAbout,setShowAbout]=useState(false)
//   return (
//     <div>
//     <h1>Home Page</h1>
//     <button onClick={()=>setShowAbout(true)}>Show About</button>
//     <Suspense fallback={<h2>Loading...</h2>}>
//     {showAbout && <About/>}
//     </Suspense>
    
//     </div>
//   )
// }

// export default App