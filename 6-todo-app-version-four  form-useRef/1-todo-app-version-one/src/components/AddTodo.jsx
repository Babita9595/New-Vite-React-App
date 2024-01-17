import {useRef} from "react";
import { IoAddCircle } from "react-icons/io5"; 

const AddTodo = ({onNewItem}) => {

    
    const todoNameElement = useRef();
    const todoDateElement = useRef();


    const handleButtonClick = (event)=>{
        event.preventDefault()
        const todoName = todoNameElement.current.value;
        const dueDate = todoDateElement.current.value;
        onNewItem(todoName,dueDate) 
        todoNameElement.current.value=""
        todoDateElement.current.value=""
    }

    return (
        <div className="container text-center">
            <form onSubmit={(event)=>handleButtonClick(event)} className="row kg-row">
                <div className="col-6">
                    <input ref={todoNameElement}   type='text' placeholder="Enter Todo List" />
                </div>
                <div className="col-4">
                    <input ref={todoDateElement}   type='date' />
                </div>
                <div className="col-1">
                    <button type="submit"  className='kg-button btn btn-success'><IoAddCircle size={20} /></button>
                </div>
            </form>
        </div>

    )
}
export default AddTodo;