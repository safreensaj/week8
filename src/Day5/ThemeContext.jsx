import { createContext, useState } from "react";
export const themeContext=createContext();
export function ThemeContext({children}){
    const [theme,setTheme]=useState("light");
    return (
    <themeContext.Provider value={{theme,setTheme}}>
        {children}
    </themeContext.Provider>
    )
}



// import { ThemeContext } from "./Day5/ThemeContext"
// import ThemeDisplay from "./Day5/ThemeDisplay"
// function App() {
//   return (
//     <div>
//       <ThemeContext>
//         <ThemeDisplay/>
//       </ThemeContext>
//     </div>
//   )
// }

// export default App