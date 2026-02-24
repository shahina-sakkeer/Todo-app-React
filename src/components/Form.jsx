import { useState } from "react"

export default function Form({allTodo, setTodos, editTodo, setEditTodo}){
    const [todo,setTodo]=useState("")

    function handleSubmit(e){
        e.preventDefault()

        if(editTodo){
            setTodos(allTodo.map((item) => 
                item.id==editTodo ? {...item,text:todo} : item
            ))
        }
        else{
            setTodos([...allTodo, {id:Date.now(), text:todo, complete:false}])
        }
        setTodo("")
       
    }

    return (
        <div className="w-full max-w-xl mt-12 mx-auto">
            <form onSubmit={handleSubmit} className="flex item-center gap-6">

                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} 
                className="flex-1 bg-slate-800 text-white px-5 py-3 rounded-xl 
                   outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter your next task"/>

                <button type="submit" className="bg-green-600 hover:bg-green-500 
                w-12 h-12 flex items-center justify-center 
                rounded-xl text-2xl font-bold transition">+
                </button>

            </form>
        </div>
    )
}