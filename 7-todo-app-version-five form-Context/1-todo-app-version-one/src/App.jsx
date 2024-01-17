
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import "./App.css"
import { useState } from "react"
import WelcomeMessage from "./components/WelcomeMessage"
import { TodoItemsContext } from "./store/todo-items-store"


function App() {
  const intialTodoItems = [{
    name: 'buy milk',
    dueDate: '4/10/2023'
  },
  {
    name: 'Go to College',
    dueDate: '4/10/2023'
  },
  {
    name: 'move on',
    dueDate: 'right now'
  }]

  const [todoItems, setTodoItems] = useState(intialTodoItems)

  // const handlNewItem = (itemName,itemDueDate)=>{
  // const newtodoItems = [...todoItems,{name:itemName,dueDate:itemDueDate}]
  // setTodoItems(newtodoItems)
  // }

  const addNewItem = (itemName, itemDueDate) => {

    setTodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, dueDate: itemDueDate }
    ])
  }

  const deleteItem = (value) => {
    const newtodoItem = todoItems.filter((item) => item.name !== value)
    setTodoItems(newtodoItem)
  }

  return (

    <TodoItemsContext.Provider value={{todoItems:todoItems,addNewItem:addNewItem,deleteItem:deleteItem}}>
      <center className='todo-container'>
        <AppName />
        <AddTodo/>
        <WelcomeMessage/>
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  )
}

export default App
