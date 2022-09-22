import React from 'react';
import '../styles/TodoSearch.css';

const TodoSearch = ({searchValue, setSearchValue, loading}) => {

  const onSearchValue = (event) =>{
    setSearchValue(event.target.value);
  }
  return (
    <input
    type='search'
     className='TodoSearch'
     placeholder="Buscar TO DO"
     onChange={onSearchValue}
     value={searchValue}
     disabled={loading}
     />
  )
}

export default TodoSearch;