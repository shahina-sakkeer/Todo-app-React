import { useState } from "react"
import TodoItem from './TodoItem'
import Form from "./Form"
import ListAll from "./ListAll"

export default function Todo(){

    const [allTodo,setTodos]=useState([])

    const [editTodo,setEditTodo]=useState(null)
    
    function handleDelete(id){               //we wrote the handle delete fn here in parent because state is defined here
        setTodos(allTodo.filter((todo) => todo.id!==id))
    }

    function handleEdit(id){
        setEditTodo(id)
    }

    function handleDone(id){
        setTodos(allTodo.map((todo) => todo.id===id ? {...todo, complete: !todo.complete} : todo))       //why complete: !todo.complete because we can either set it as complete:true. but always choose as whatever the opposite of todo.complete. also ...todo becuase we dont need to change any other property of that object
        console.log(allTodo) 
    }

    return (
        <div>
            <Form allTodo={allTodo} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />

            <ListAll allTodo={allTodo} onDelete={handleDelete} onEdit={handleEdit} markDone={handleDone} />      
            {/* pass that fn to listall comp */}
        </div>
    )
}