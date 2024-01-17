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

{/* <button onClick={() => { handlecallapi() }}>fetch api data</button>
<div>
  {
    apidata.map((data) =>
      <div key={data?.id}>
        <p className={` todo-item ${selectedItemId === data?.id ? 'text-success' : ''}`} onClick={() => { handlecolorchange(data?.id) }}>{data?.title}</p>
        <img src={data?.image} height='100' width='100' />
      </div>
    )
  }
</div> */}