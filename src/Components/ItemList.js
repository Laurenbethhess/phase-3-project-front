import React, { useEffect, useState } from 'react'
import Item from './Item'
import SearchBar from './SearchBar'
import TodoList from './TodoList'

function ItemList({todos, onTodoDelete, onUpdateTodo}) {
    const [search, setSearch] = useState("")
    const [filterBy, setFilterBy] = useState('')

    const filteredTodos = todos.filter(todo => todo.category.category === filterBy) 
    const renderTodosList = filteredTodos.map(todo => <TodoList todo={todo} key={todo.id} onTodoDelete={onTodoDelete}/>)
    const renderTodosListAll = todos.map(todo => <TodoList todo={todo} key={todo.id} onTodoDelete={onTodoDelete}/>)
    
    const onFilterChange = (e) => {
        setFilterBy(e.target.value)
      }

    const displayedTodos = todos.filter(todo =>
    todo.item.toLowerCase().includes(search.toLowerCase())
    )

    const renderTodos = displayedTodos.map(todo => <Item todo={todo} key={todo.id} onTodoDelete={onTodoDelete} onUpdateTodo={onUpdateTodo} />)


    return (
        <div>
            <div className='organize'>
                <div className='dropdown'>
                    <div>Filter by Category</div>
                   
                    <select className='select' onChange={onFilterChange} value={filterBy}>
                        <option value="">Choose Category</option>
                        <option value="not assigned">Not Assigned</option>
                        <option value="work">Work</option>
                        <option value="chores">Chores</option>
                        <option value="exercise">Exercise</option>
                        <option value="misc">Misc</option>
                        <option value="groceries">Groceries</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>
                <div className='search'>
                    <div>Search</div>
                    <SearchBar onSearch={setSearch}/>
                </div>
            </div>
            
            <div className='organize'>
                <div className='all-todos'>
                    <h2>All Todos</h2>
                    {renderTodosListAll}
                </div>
                <div className='other-list'>
                    <h2>Other List</h2>
                    {renderTodosList}
                </div>
                <div className='to-do-list'>
                    <h2>To-Do List</h2>
                    {renderTodos}
                </div>
            </div>
        </div>
    )
}

export default ItemList