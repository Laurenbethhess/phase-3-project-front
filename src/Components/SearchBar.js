import React, { useEffect, useState } from 'react'

function SearchBar({onSearch}) {
    const [search, setSearch] = useState('');
      
        function handleSubmit(e) {
          e.preventDefault();
          onSearch(search);
        }
      
        const resetInputField = () => {
          setSearch("");
        };
      
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="search"
              placeholder="search todos"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <br/>
            <button type="submit">Search</button>
            <button onClick={resetInputField}>Reset</button>
          </form>
        );
      }
    
      

export default SearchBar