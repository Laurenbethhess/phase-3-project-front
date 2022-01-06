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
          
          <form className='searchbar' onSubmit={handleSubmit}>
            <input
              type="text"
              id="search"
              placeholder="Search Todos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            
            <button id='enter' type="submit">Search</button>
            <button id='reset' onClick={resetInputField}>Reset</button>
          </form>
        );
      }
    
      

export default SearchBar