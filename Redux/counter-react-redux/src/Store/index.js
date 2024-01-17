
import {configureStore} from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

// const INITIAL_VALUE = {
// counter:0
// }


//list of reducers
const counterSlice = createSlice({
    name:"counter",     //slice name
    initialState:{initialVal:0},
    reducers:{
        increment:(state)=>{
            console.log(state.initialVal++)
            state.initialVal + 1;
           
          
        },
         decrement:(state)=>{
            state.initialVal--;
    },
         add:(state,action)=>{
            console.log(state,action)
            console.log(action.payload.num)
            state.initialVal = state.initialVal + Number(action.payload.num)
    }
    }

})

//reducer function
// const counterReducer = (store=INITIAL_VALUE ,action)=>{
//    let newStore = store;
  
//     if(action.type === "INCREMENT"){
//         newStore = {counter: newStore.counter + 1}
        
//     }else  if(action.type === "DECREMENT"){
        
//         newStore = {counter: newStore.counter - 1}
//     }else if(action.type === "ADD"){
//         newStore = {counter: newStore.counter + Number(action.payload.num) } 
//     }
// // 
// return newStore;
// }

const counterStore = configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})


export const counterAction = counterSlice.actions;
export default counterStore;

