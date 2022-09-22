import React from 'react'
import '../styles/TodoButton.css';

function TodoButton({openForm, setOpenForm}) {

  return (
    <button 
    className='CreateTodoButton'
    type='button'
    placeholder='Buscar'
    onClick={() => setOpenForm(!openForm)}>+</button>
  )
}

export default TodoButton;