import React from 'react';
import noSearch from '../assets/images/noSearch.svg';
import '../styles/EmptySearchTodos.css';

const EmptySearchTodos = (props) => {
  return (
    <div className='container-empty'>
    <div className='img-Empty'>
        <img src={noSearch} alt="libreta" />
    </div>
    <div className='containerEmpty-text'>
        <p>No se encuentra resultado para tu busqueda de: {props.searchValue.toUpperCase()}</p>
    </div>
</div>
  )
}

export default EmptySearchTodos