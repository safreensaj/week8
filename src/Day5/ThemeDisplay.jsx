import { useContext } from "react";
import { themeContext } from "./ThemeContext";
function ThemeDisplay(){
    const {theme,setTheme}=useContext(themeContext);
    return (
        <div style={{backgroundColor:theme==="light"? "white":"black",
color:theme==="light"? "black":"white"
        }}>
        <h1>Theme Display : {theme}</h1>
        <button onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>Theme Change</button>
        </div>
    )
}
export default ThemeDisplay;