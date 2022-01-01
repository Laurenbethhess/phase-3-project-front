import React, { useEffect, useState } from 'react'
import EditTodo from './EditTodo';

function Item({todo, onTodoDelete, onUpdateTodo}) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/todos/${todo.id}`, {
          method: "DELETE",
        })
        onTodoDelete(todo.id);
    }

    function handleUpdateTodo(updatedTodo) {
        onUpdateTodo(updatedTodo)
      }
    
    return (
        <div>
                <li>{todo.item} - importance:{todo.importance} - category:{todo.category.category} 
                <button onClick={handleDeleteClick}>🗑</button>
                <EditTodo onUpdateTodo={handleUpdateTodo} todo={todo}/>
                </li>
        </div>
    )
}

export default Item
