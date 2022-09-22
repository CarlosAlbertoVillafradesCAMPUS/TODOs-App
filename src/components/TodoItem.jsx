import React from 'react';
import '../styles/TodoItem.css';
import CompleteIcon from './CompleteIcon';
import DeleteIcon from './DeleteIcon';

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <CompleteIcon
      complete={props.complete}
      onComplete={props.onComplete} />
        <p className={`TodoItem-p ${props.complete && 'TodoItem-p--complete'}`}>{props.text}</p>
      <DeleteIcon
      onDelete={props.onDelete} />  
    </li>
  )
}

export default TodoItem;