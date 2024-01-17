import { useState } from "react"
import { useEffect } from "react"

const CurrentTime = ()=>{
    const [time,setTime] = useState(new Date())

    useEffect(()=>{
       const intervalId = setInterval(() => {
        setTime(new Date())
       }, 1000); 

       return ()=>{
        clearInterval(intervalId) 
        console.log('ett vdfgge vddggd')}
    },[])

    
    return(
        <p>this is the current time of bharat: <b>{time.toLocaleDateString()}</b> --
            {time.toLocaleTimeString()}
         </p>
        
    )
}
export default CurrentTime;