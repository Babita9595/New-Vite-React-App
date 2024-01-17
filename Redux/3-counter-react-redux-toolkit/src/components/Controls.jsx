import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = ()=>{

    const dispatch = useDispatch();
    const inputValue = useRef()


    const handleIncrement = ()=>{
        dispatch({type:"INCREMENT"})
    }

    const handleDecrement = ()=>{
        dispatch({type:"DECREMENT"}); 
    }

    const handleADD =()=>{
        const newValue = inputValue.current.value;
        dispatch({type:"ADD",payload:{num:newValue}});  
    }


    return(
      <>
       <button onClick={()=>handleIncrement()} type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        <button onClick={()=>handleDecrement()} type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
        <button  onClick={()=>handleADD()} type="button" className="btn btn-outline-secondary btn-lg px-4">add</button> 
    <div>
    <input type='number' ref={inputValue}  />
    </div>
        
        </>
    )
}
export default Controls;