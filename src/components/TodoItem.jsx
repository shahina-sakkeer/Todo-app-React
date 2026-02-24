import { FaTrash } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"

export default function TodoItem({item, onDelete, onEdit, markDone}){

    return <div className={`flex items-center justify-between 
                border rounded-xl px-5 py-4 transition-all
                ${item.complete 
                    ? "bg-green-900/40 border-green-600 text-gray-400" 
                    : "bg-black border-neutral-600 text-white"
                }`}>

                <input 
                type="checkbox" checked={item.complete}  onChange={() => markDone(item.id)} />

                <div className={`flex-1 ml-4 text-lg transition ${
                    item.complete ? "line-through" : ""}`}>
                    {item.text}
                </div>

                <div className="flex items-center gap-4 text-neutral-400">
                    <button className="hover:text-red-500 transition cursor-pointer"
                    onClick={() => onEdit(item.id)}>
                        <FaEdit />
                    </button>

                    <button onClick={() => onDelete(item.id)} className="hover:text-red-500 transition cursor-pointer">
                        {/* ondelete fn is called here on each todo items in the list */}
                        <FaTrash />
                    </button>

                </div>
      
    </div>
}