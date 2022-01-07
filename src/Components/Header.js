import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'


function Header({todos, onTodoDelete}) {
    const renderTodosListAll = todos.map(todo => <TodoList todo={todo} key={todo.id} onTodoDelete={onTodoDelete}/>)


    return (
        <div>
            <h1 className='header'>To-Do List</h1>
            <div>
                <h2 className='all-todos-title'>All Todos</h2>
                {renderTodosListAll}
                <br/>
            </div>
        </div>
    )
}

export default Header