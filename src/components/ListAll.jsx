import TodoItem from "./TodoItem"

export default function ListAll({allTodo, onDelete, onEdit, editTodo, markDone}){      //receive the passed fn inside the this child
    return (
        <div className="max-w-xl mx-auto mt-6 space-y-4">
            {allTodo.map((item) => {
                return <TodoItem key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} editTodo={editTodo} markDone={markDone} />     //pass the fn to the each todoitem 
            })}
        </div>
    )
}