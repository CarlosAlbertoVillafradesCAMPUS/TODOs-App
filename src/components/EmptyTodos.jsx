import React from 'react';
import libreta from '../assets/images/libreta-removebg-preview.png';
import '../styles/EmptyTodos.css';

const EmptyTodos = (props) => {
  return(
    <div className='container'>
        <p className='text-prin'>No se encuentran TO DO's...</p>
        <div className='img-empty'>
            <img src={libreta} alt="libreta" />
        </div>
        <div className='container-text'>
            <p className='vamos'>VAMOS</p>
            <p>Crea tu lista de TO DO's, oprimiendo.</p>
        </div>
        <button 
    className='ButtonEmpty'
    type='button'
    placeholder='Buscar'
    onClick={() => props.setOpenForm(!props.openForm)}>+</button>
    </div>
  );
}

export default EmptyTodos