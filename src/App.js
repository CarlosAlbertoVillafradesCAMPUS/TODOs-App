import React from 'react';
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./containers/TodoList";
import TodoItem from "./components/TodoItem";
import TodoButton from "./components/TodoButton";
import TodoFond from "./components/TodoFond";
import TodoContainer from "./containers/TodoContainer";
import TodoHeader from './components/TodoHeader';
import TodosError from './components/TodosError';
import TodosLoading from './components/TodosLoading';
import EmptyTodos from './components/EmptyTodos';
import EmptySearchTodos from './components/EmptySearchTodos';
import ChangeAlert from './components/ChangeAlert';
import Modal from "./Modal";
import TodoForm from "./components/TodoForm";
import useTodos from './hooks/useTodos';
import './App.css';


function App() {
  const { totalTodos,
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
sincronizeTodos} = useTodos();

  return (
    <>
      <div className="container-principal">
        <TodoFond />
        <TodoContainer>
          <TodoHeader>
          <TodoCounter 
          totalTodos={totalTodos}
          completeTodos={completeTodos}
          loading={loading} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            loading={loading}
          />
          </TodoHeader>
          <TodoList 
          error={error}
          loading={loading}
          searchTodos={searchTodos}
          totalTodos={totalTodos}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos openForm={openForm} setOpenForm={setOpenForm} />}
          onEmptySearchTodos={() => <EmptySearchTodos searchValue={searchValue} />}
          //HACER RENDER UTILIZANDO RENDER PROPS
          // render={todo => (
          //   // <TodoItem
          //   //   key={todo.text}
          //   //   text={todo.text}
          //   //   complete={todo.completed}
          //   //   date={todo.date}
          //   //   onComplete={() => todosComplete(todo.text)}
          //   //   onDelete={() => todosDelete(todo.text)}
          //   // />
          // )} 
          >
            {/*HACER RENDER UTILIZANDO RENDER FUNCTIONS*/}
            {todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              complete={todo.completed}
              date={todo.date}
              onComplete={() => todosComplete(todo.text)}
              onDelete={() => todosDelete(todo.text)}
            />
          )}
            </TodoList>
          <TodoButton openForm={openForm} setOpenForm={setOpenForm} />
        </TodoContainer>
      </div>
      <ChangeAlert sincronize={sincronizeTodos} />
      {openForm && (
        <Modal>
          <TodoForm 
          todosAdd={todosAdd} 
          setOpenForm={setOpenForm} />
        </Modal>
      )}
    </>
  );
}

export default App;