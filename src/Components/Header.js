import React, { useEffect, useState } from 'react'
import Category from './Category'
import TodoList from './TodoList'

function Header({categories, todos}) {
    const renderCategories = categories.map(category => <Category category={category} key={category.id}/>)
    const renderTodosList = todos.map(todo => <TodoList todo={todo} key={todo.id}/>)


    return (
        <div>
            <h1>To-Do List</h1>
            {renderTodosList}
            <>_______________________________________________</>            
            <h2>Categories</h2>
            {renderCategories}
            <>_______________________________________________</>

            <br/>
        </div>
    )
}

export default Header