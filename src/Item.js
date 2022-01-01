import React, { useEffect, useState } from 'react'

function Item({todo, onTodoDelete}) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/todos/${todo.id}`, {
          method: "DELETE",
        })
        onTodoDelete(todo.id);
    }
    

    return (
        <div>
            <ul>
                <li>{todo.item} - importance:{todo.importance} - category:{todo.category.category} 
                <button onClick={handleDeleteClick}>🗑</button>
                </li>
            </ul>
        </div>
    )

}

export default Item
