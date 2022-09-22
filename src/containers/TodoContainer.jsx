import React from 'react';
import '../styles/TodoContainer.css';

const TodoContainer = (props) => {
  return (
    <div className='container-todo'>
        {props.children}
    </div>
    
  )
}

export default TodoContainer;