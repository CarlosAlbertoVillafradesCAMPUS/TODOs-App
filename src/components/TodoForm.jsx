import React from 'react';
import '../styles/TodoForm.css';

const TodoForm = ({todosAdd, setOpenForm}) => {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        todosAdd(newTodoValue);
        setNewTodoValue('');
        setOpenForm(false)
    }

    const onDelete = () => {
        setOpenForm(false)
    }
    
  return (
    <form onSubmit={onSubmit}>
      <label>Crea tu nuevo TO DO</label>
      <textarea
      placeholder="Nuevo TO DO"
      onChange={onChange}
      value={newTodoValue}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onDelete}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export default TodoForm