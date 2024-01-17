import { createStore } from "redux";


const INITIAL_VALUE = {
counter:0
}

//reducer function
const counterReducer = (store=INITIAL_VALUE ,action)=>{
   let newStore = store;
  
    if(action.type === "INCREMENT"){
        newStore = {counter: newStore.counter + 1}
        
    }else  if(action.type === "DECREMENT"){
        
        newStore = {counter: newStore.counter - 1}
    }else if(action.type === "ADD"){
        newStore = {counter: newStore.counter + Number(action.payload.num) } 
    }
// 
return newStore;
}

const counterStore = createStore(counterReducer)

export default counterStore;