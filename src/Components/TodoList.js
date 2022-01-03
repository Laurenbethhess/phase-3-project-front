import React, { useEffect, useState } from 'react'

function TodoList({todo}) {
    
    return (
        <div>
            {todo.importance == "1high" ? (
                <li className="red">{todo.item.toLowerCase()}</li>
            ) : todo.importance == "2medium" ? (
                <li className="orange">{todo.item.toLowerCase()}</li>
            ) : todo.importance == "3low" ? (
                <li className="green" >{todo.item.toLowerCase()}</li> 
            ) : (
                <li>{todo.item.toLowerCase()}</li> 
            )}

        </div>
    )
}
export default TodoList