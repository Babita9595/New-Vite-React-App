import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css"

const TodoItems = ({todoItems})=>{
    return(
        <div className={style.itemContainer}> 
        {
            todoItems?.map((item)=>
            <TodoItem key={item.name} todoName = {item.name} todoDate = {item.dueDate}/>
            )
        }
        </div>
    )
}
export default TodoItems;