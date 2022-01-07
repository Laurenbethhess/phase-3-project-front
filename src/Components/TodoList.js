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
                <li className="red">{todo.item.toLowerCase()} <button onClick={handleDeleteClick}>🗑</button></li>
            ) : todo.importance == "2. medium" ? (
                <li className="orange">{todo.item.toLowerCase()} <button onClick={handleDeleteClick}>🗑</button></li>
            ) : todo.importance == "3. low" ? (
                <li className="green" >{todo.item.toLowerCase()} <button onClick={handleDeleteClick}>🗑</button></li> 
            ) : (
                <li>{todo.item.toLowerCase()}</li> 
            )}
            

        </div>
    )
}
export default TodoList