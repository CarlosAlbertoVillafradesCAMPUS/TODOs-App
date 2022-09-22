import React from "react";
import useLocalStorage from "./useLocalStorage";

const useTodos = () => {
  const {item:Todos, 
    savedItem:setTodos,
    sincronizeItem: sincronizeTodos,
     loading,
      error} = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  //TodoCounter
  const totalTodos = Todos.length;
  const completeTodos = Todos.filter((todo) => !!todo.completed).length;

  //todoSearch
  let searchTodos = [];

  if (!searchValue.length >= 1) {
    searchTodos = Todos;
  } else {
    searchTodos = Todos.filter((todo) => {
      const searchText = searchValue.toLowerCase();
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //TodoItem
  const todosComplete = (text) => {
    const todoIndex = Todos.findIndex((todo) => todo.text === text);
    const newTodos = [...Todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const todosDelete = (text) => {
    const todoIndex = Todos.findIndex((todo) => todo.text === text);
    const newTodos = [...Todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  //CREAR Todos
  const [openForm, setOpenForm] = React.useState(false);

  const todosAdd = (text) => {
    if (text === "") {
      setOpenForm(false);
    } else {
      const newTodos = [...Todos];
      newTodos.push({
        text,
        completed: false,
      });
      setTodos(newTodos);
    }
  };

  return {
    totalTodos,
    completeTodos,
    searchTodos,
    searchValue,
    setSearchValue,
    todosComplete,
    todosDelete,
    openForm,
    setOpenForm,
    todosAdd,
    loading,
    error,
    sincronizeTodos
  };
};

export default useTodos;