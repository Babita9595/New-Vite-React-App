import { useState } from "react";
import { IoAddCircle } from "react-icons/io5"; 

const AddTodo = ({onNewItem}) => {

    const [todoName, setTodoName] = useState("")
    const [dueDate, setDueDate] = useState("")


    const handleInputChange = (key,value)=>{
        if(key==="name"){
            setTodoName(value)
        }else{
            setDueDate(value) 
        }
    }

    const handleButtonClick = ()=>{
        onNewItem(todoName,dueDate)
        setTodoName("")
        setDueDate("")
    }

    return (
        <div className="container text-center">
            <form className="row kg-row">
                <div className="col-6">
                    <input value={todoName} onChange={(e)=>handleInputChange('name',e.target.value)} type='text' placeholder="Enter Todo List" />
                </div>
                <div className="col-4">
                    <input value={dueDate} onChange={(e)=>handleInputChange('date',e.target.value)} type='date' />
                </div>
                <div className="col-1">
                    <button type="submit" onClick={()=>handleButtonClick()} className='kg-button btn btn-success'><IoAddCircle size={20} /></button>
                </div>
            </form>
        </div>

    )
}
export default AddTodo;