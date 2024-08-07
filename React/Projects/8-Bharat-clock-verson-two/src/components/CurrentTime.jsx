import { useEffect, useState } from "react"


const CurrentTime=()=>{

    const[time,setTime]=useState(new Date())

    useEffect(()=>{
        const times= setInterval(() => {
            setTime(new Date())
        }, 1000);
        return (()=>{
            clearInterval(times)
        })  
    },[])
     
    return (
        <p className="lead">This is the current time :{time.toLocaleDateString()}-{time.toLocaleTimeString()} </p>
    )
}
export default CurrentTime