import React from 'react';
import '../styles/TodosLoading.css';

const TodosLoading = () => {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando TO DO's...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  )
}

export default TodosLoading