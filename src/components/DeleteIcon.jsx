import React from 'react'
import TodoIcon from './TodoIcon'

const DeleteIcon = ({onDelete}) => {
  return (
    <TodoIcon 
    type='delete'
    color='#A5A5A5'
    onClick={onDelete} />
  )
}

export default DeleteIcon;