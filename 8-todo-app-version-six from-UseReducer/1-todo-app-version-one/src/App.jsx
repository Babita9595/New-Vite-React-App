
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import "./App.css"
import { useReducer, useState } from "react"
import WelcomeMessage from "./components/WelcomeMessage"
import TodoItemsContexProvider, { TodoItemsContext } from "./store/todo-items-store"




function App() {
 
  // const [todoItems, setTodoItems] = useState([])
  
  

  return (

      <TodoItemsContexProvider>
      <center className='todo-container'>
        <AppName />
        <AddTodo/>
        <WelcomeMessage/>
        <TodoItems />
      </center>
      </TodoItemsContexProvider>
  )
}

export default App
