import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'

function Header({categories, todos}) {
    const renderTodosList = todos.map(todo => <TodoList todo={todo} key={todo.id}/>)


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