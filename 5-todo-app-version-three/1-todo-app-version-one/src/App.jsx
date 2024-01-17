
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import "./App.css"
import { useState } from "react"
import WelcomeMessage from "./components/WelcomeMessage"


function App() {
const intialTodoItems = [{
  name:'buy milk',
  dueDate:'4/10/2023'
},
{
  name:'Go to College',
  dueDate:'4/10/2023'
},
{
  name:'move on',
  dueDate:'right now'
}]

const [todoItems, setTodoItems] = useState(intialTodoItems)

const handlNewItem = (itemName,itemDueDate)=>{
const newtodoItems = [...todoItems,{name:itemName,dueDate:itemDueDate}]
setTodoItems(newtodoItems)
}

const handleDeleteItem = (value)=>{
  const newtodoItem = todoItems.filter((item)=>item.name !== value)
  setTodoItems(newtodoItem)
}

  return (
    <center className='todo-container'>
     <AppName />
      <AddTodo onNewItem={(itemName,itemDueDate)=>handlNewItem(itemName,itemDueDate)} />
    { todoItems.length === 0 && <WelcomeMessage/>}
      <TodoItems onDeleteClick={(value)=>handleDeleteItem(value)} todoItems={todoItems}/>
    </center>
  )
}

export default App
