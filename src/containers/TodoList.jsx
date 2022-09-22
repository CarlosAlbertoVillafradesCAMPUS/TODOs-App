import React from 'react';
import '../styles/TodoList.css';

function TodoList(props) {
  const renderFunc = props.render || props.children;
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && props.totalTodos === 0) && props.onEmptyTodos()}
      {(props.totalTodos > 0 && !props.searchTodos.length) && props.onEmptySearchTodos(props.searchText)}
      
      {(!props.loading && !props.error) && props.searchTodos.map(renderFunc)}
    </section>

  )
}

export default TodoList;