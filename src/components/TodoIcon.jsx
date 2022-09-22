import React from 'react';
import {ReactComponent as CheckSVG} from '../assets/icons/check.svg';
import { ReactComponent as DeleteSVG } from '../assets/icons/eliminar.svg';
import '../styles/TodoIcon.css';

const iconTypes = {
    "check": color => (
        <CheckSVG className='Icon-svg Icon-svg--check' fill={color} />
    ),
    "delete": color => (
        <DeleteSVG className='Icon-svg Icon-svg--delete' fill={color} />
    )
}

const TodoIcon = ({type, color,  onClick}) => {
  return (
    <span 
    className={`Icon-container Icon-container--${type}`}
    onClick={onClick} >
        {iconTypes[type](color)}
    </span>
  )
}

export default TodoIcon