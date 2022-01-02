import React, { useEffect, useState } from 'react'
import Category from './Category'

function Header({categories, todosList}) {
    const renderCategories = categories.map(category => <Category category={category} />)
    const renderTodosList = todosList.map(todosListItem => <li>{todosListItem}</li>)


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