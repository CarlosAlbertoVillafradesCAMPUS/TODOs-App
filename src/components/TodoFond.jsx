import React from 'react';
import fondo from '../assets/images/Color-morado.jpg';
import '../styles/TodoFond.css';

const TodoFond = () => {
  return (
    <div className='fondo'>
        <img src={fondo} alt='fondo' />
    </div>
  )
}

export default TodoFond