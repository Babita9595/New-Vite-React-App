import { createContext } from "react"

import { useReducer } from "react";
export const TodoItemsContext = createContext(
    {todoItems:[],addNewItem:()=>{},deleteItem:()=>{}}
); //one type of create contex object


const todoItemsReducer = (currentTodoItems,action)=>{ //this is reducer fn
 
    let newTodoItems = currentTodoItems
    if(action.type = "NEW_ITEM"){
       newTodoItems = [
        ...currentTodoItems, 
        { name: action.payload.itemName, dueDate: action.payload.itemDueDate }
      ];
            
      console.log( newTodoItems,'lll')
    }else if(action.type = "DELETE_ITEM"){
      newTodoItems =currentTodoItems.filter((item) => item.name !== action.payload.NewitemName)
      console.log( newTodoItems,"yyyy")
    
    }
    
    return  newTodoItems;
  // console.log( newTodoItems,"iii")
  }



const TodoItemsContexProvider =({children})=>{
    const [todoItems,dispatchTodoItem] = useReducer( todoItemsReducer, []) //contains initial state and reducer function

  const addNewItem = (itemName, itemDueDate) => {  //dispatch 

    const newItemAction = {
      type: "NEW_ITEM",
      payload: {itemName, itemDueDate,}
    }
    dispatchTodoItem(newItemAction);
  }

  const deleteItem = (NewitemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName : NewitemName,
      }
    }
    dispatchTodoItem(deleteItemAction);
  }

return(

    <TodoItemsContext.Provider value={{todoItems,deleteItem,addNewItem}}>{children}</TodoItemsContext.Provider>
)


}
export default TodoItemsContexProvider;