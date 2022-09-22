import React from 'react';
import '../styles/TodoCounter.css';

const TodoCounter = ({completeTodos, totalTodos, loading}) => {
  return (
    <div className={`container-title ${!!loading && 'container-title--loading'}`}>
    <h1 className='TodoCounterh1'>What's Up </h1>
    <h2 className='TodoCounterh2'>Haz realizado {completeTodos} de  {totalTodos} TO DO's</h2>
    </div>
  )
}

export default TodoCounter;