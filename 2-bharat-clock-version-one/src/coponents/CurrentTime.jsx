const CurrentTime = ()=>{

    let time = new Date()
    return(
        <p>this is the current time of bharat: <b>{time.toLocaleDateString()}</b> --
            {time.toLocaleTimeString()}
         </p>
        
    )
}
export default CurrentTime;