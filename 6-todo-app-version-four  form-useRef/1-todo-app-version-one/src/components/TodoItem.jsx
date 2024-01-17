
import { MdOutlineAutoDelete } from "react-icons/md";


const TodoItem = ({todoName,todoDate,onDeleteClick}) => {
   
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
                    <button onClick={()=>onDeleteClick(todoName)} className='btn btn-danger kg-button'><MdOutlineAutoDelete /></button>
                </div>
            </div>
        </div>
    )
}
export default TodoItem;