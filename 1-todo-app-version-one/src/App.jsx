import { Button } from "bootstrap"
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItem1 from "./components/TodoItem1"
import TododItem2 from "./components/TodoItem2"
import "./App.css"


function App() {


  return (
    <center class='todo-container'>
     <AppName/>
      <AddTodo/>
        <div class='item-container'> 
        <TodoItem1/>
        <TododItem2/>
        </div>
    </center>
  )
}

export default App
