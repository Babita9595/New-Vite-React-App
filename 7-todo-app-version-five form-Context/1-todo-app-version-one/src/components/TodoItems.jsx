import { useContext } from "react";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css"
import { TodoItemsContext } from "../store/todo-items-store";



const TodoItems = ()=>{
   
   const {todoItems}= useContext(TodoItemsContext) 

    return(
        <div className={style.itemContainer}> 
        {
            todoItems?.map((item)=>
            <TodoItem key={item.name} todoName = {item.name} todoDate = {item.dueDate} />
            )
        }
        </div>
    )
}
export default TodoItems;