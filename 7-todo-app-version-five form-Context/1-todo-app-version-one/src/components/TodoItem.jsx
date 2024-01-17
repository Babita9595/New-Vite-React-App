
import { useContext } from "react";
import { MdOutlineAutoDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";


const TodoItem = ({todoName,todoDate}) => {
   
    const {deleteItem} = useContext(TodoItemsContext)

    return (
        <div className="container ">
            <div className="row kg-row">
                <div className="col-6">
                    {todoName}
                </div>
                <div className="col-4">
                   {todoDate}
                </div>
                <div className="col-1">
                    <button onClick={()=>{deleteItem(todoName)}} className='btn btn-danger kg-button'><MdOutlineAutoDelete /></button>
                </div>
            </div>
        </div>
    )
}
export default TodoItem;