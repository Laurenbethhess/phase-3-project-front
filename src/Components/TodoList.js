import React, { useEffect, useState } from 'react'

function TodoList({todo}) {
    

    
            



    return (
        <div>
            {todo.importance == "high" ? (
                <li className="red">{todo.item.toLowerCase()}</li>
            ) : todo.importance == "medium" ? (
                <li className="orange">{todo.item.toLowerCase()}</li>
            ) : (
                <li className="green" >{todo.item.toLowerCase()}</li>   
            )}

        </div>
    )
}
export default TodoList