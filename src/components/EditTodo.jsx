import { useState } from "react"

export default function EditTodo({handleUpdate, editedTodo}){

    const [text, setText] = useState(editedTodo.text)

    function handleSubmit(e){
        e.preventDefault()

        handleUpdate(editedTodo.id, text)
    }

    return <div>
        <form onSubmit={handleSubmit} className="border border-green-500 rounded-xl p-4 bg-slate-900 shadow-md flex item-center gap-3">

            <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
            className="flex-1 bg-transparent border border-neutral-600 rounded-lg px-3 py-2 
               text-white outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"/>

            <button type="submit" className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg 
               text-white font-semibold transition">update</button>
        </form>
    </div>
}