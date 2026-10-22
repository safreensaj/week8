import { useState,useEffect } from "react";
function useFetch(url){
 const [loading,setLoading]=useState(true);
    const [data,setData]=useState(null);
    const [error,setError]=useState("");
    useEffect(()=>{
     fetch(url)
     .then(response=>{
        if(!response.ok){
            throw new Error("Failed to fetch data")
        }
        return response.json()
     })
     .then(data=>{
        console.log(data)
        setData(data)
        setLoading(false)
     })
     .catch(()=>{
        setError("Something went wrong")
        setLoading(false)
     })
    },[url])
return {data,loading,error}
}
export default useFetch