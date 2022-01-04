import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'

function Header({todos, onTodoDelete}) {
    const [filterBy, setFilterBy] = useState('')
    const filteredTodos = todos.filter(todo => todo.category.category === filterBy) 
    const renderTodosList = filteredTodos.map(todo => <TodoList todo={todo} key={todo.id} onTodoDelete={onTodoDelete}/>)
    const renderTodosListAll = todos.map(todo => <TodoList todo={todo} key={todo.id} onTodoDelete={onTodoDelete}/>)
    
    const onFilterChange = (e) => {
        setFilterBy(e.target.value)
      }

    return (
        <div>
            <h1>To-Do List</h1>
            <h2>All Todos</h2>
            {renderTodosListAll}
            <h2>Filter by Category:</h2>
            <select onChange={onFilterChange} value={filterBy}>
                <option value="">Choose Category</option>
                <option value="not assigned">Not Assigned</option>
                <option value="work">Work</option>
                <option value="chores">Chores</option>
                <option value="exercise">Exercise</option>
                <option value="misc">Misc</option>
                <option value="groceries">Groceries</option>
                <option value="kids">Kids</option>
            </select>
            {renderTodosList}
         
            <br/>
            <>_______________________________________________</>
        </div>
    )
}

export default Header