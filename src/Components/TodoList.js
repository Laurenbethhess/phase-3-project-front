import React, { useEffect, useState } from 'react'

function TodoList({todo, onTodoDelete}) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/todos/${todo.id}`, {
          method: "DELETE",
        })
        onTodoDelete(todo.id)
    }
    
    return (
        <div className='all-todos'>
            {todo.importance == "1. high" ? (
                <li className="red"><button className='trash' onClick={handleDeleteClick}>❌</button>{todo.item.toLowerCase()} </li>
            ) : todo.importance == "2. medium" ? (
                <li className="orange"><button className='trash' onClick={handleDeleteClick}>❌</button>{todo.item.toLowerCase()} </li>
            ) : todo.importance == "3. low" ? (
                <li className="green" ><button className='trash' onClick={handleDeleteClick}>❌</button>{todo.item.toLowerCase()} </li> 
            ) : (
                <li>{todo.item.toLowerCase()}</li> 
            )}
            

        </div>
    )
}
export default TodoList