import { createContext } from "react"
import { useContext } from "react"

export const TodoItemsContext = createContext(
    {todoItems:[],addNewItem:()=>{},deleteItem:()=>{}}
); //one type of create contex object

