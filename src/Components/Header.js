import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'

function Header({todos, onTodoDelete}) {
    const renderTodosList = todos.map(todo => <TodoList todo={todo} key={todo.id} onTodoDelete={onTodoDelete}/>)


    return (
        <div>
            <h1>To-Do List</h1>
            {renderTodosList}
            <>_______________________________________________</>            
            <br/>
        </div>
    )
}

export default Header