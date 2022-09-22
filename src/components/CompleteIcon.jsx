import React from 'react';
import TodoIcon from './TodoIcon';

const CompleteIcon = ({complete, onComplete}) => {
  return (
    <TodoIcon 
    type='check'
    color={(complete===true) ? '#9e02c9' : '#A5A5A5'}
    onClick={onComplete} />
  )
}

export default CompleteIcon;