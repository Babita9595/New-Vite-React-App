import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css"

const TodoItems = ({todoItems,onDeleteClick})=>{
    return(
        <div className={style.itemContainer}> 
        {
            todoItems?.map((item)=>
            <TodoItem key={item.name} todoName = {item.name} todoDate = {item.dueDate} onDeleteClick={onDeleteClick}/>
            )
        }
        </div>
    )
}
export default TodoItems;