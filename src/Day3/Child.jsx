import { memo } from "react";
function Child({onClick}){
    console.log("Child rendered")
    return (
        <button onClick={onClick}>Say Hello</button>
    )
}
export default memo(Child);