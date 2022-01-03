import React, { useEffect, useState } from 'react'

function SearchBar({filterBy, onFilterBy}) {

    const onFilterChange = (e) => {
        onFilterBy(e.target.value)
      }

    return(
        <div>
        <strong>Filter:</strong>
        <select onChange={onFilterChange} value={filterBy}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        </div>
    )
}

export default SearchBar