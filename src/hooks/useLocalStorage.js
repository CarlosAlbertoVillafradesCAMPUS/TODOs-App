import React from "react";

const useLocalStorage = (itemName, initialValue) => {
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);
  // const [item, setItem] = React.useState(initialValue);
  // const [sincronizedItem, setSincronizedItem] = React.useState(true);

  const [state, dispatch] = React.useReducer(reducer, initialState(initialValue));

  const { error,
    loading,
    item,
    sincronizedItem} =  state;

  //ACTIONS CREATORs
  const onError = (error) => {
    dispatch({ type: 'ERROR', payload: error });
  }
  const onSucces = (parsedItem) => {
    dispatch({ type: 'SUCCES', payload: parsedItem });
  }
  const onUpdate = (newItem) => {
    dispatch({ type: 'UPDATE', payload: newItem})
  }
  const onSincronized = () => {
    dispatch({ type: 'SINCRONIZED'})
  }


  React.useEffect(() => {
    setTimeout(() => {
      try {
        // Traemos nuestros TODOs almacenados
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
        
        if (!localStorageItem) {
          // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          // Si existen TODOs en el localStorage los regresamos como nuestros todos
          parsedItem = JSON.parse(localStorageItem);
        }
        onSucces(parsedItem)

      } catch(error) {
        onError(error)
      }
    }, 3000);
  }, [sincronizedItem]);


  // Creamos la función en la que actualizaremos nuestro localStorage
  const savedItem = (newItem) => {
    // Convertimos a string nuestros TODOs
    const stringifiedItem = JSON.stringify(newItem);
    // Los guardamos en el localStorage
    localStorage.setItem(itemName, stringifiedItem);
    // Actualizamos nuestro estado
    onUpdate(newItem);
  };

  const sincronizeItem = () => {
    onSincronized()
  };

  return {item, savedItem, loading, error, sincronizeItem};
};

//REDUCER
const initialState = (initialValue) => {
  return {
  error: false,
  loading: true,
  item: initialValue,
  sincronizedItem: true,}
}

const reducer = (state, action) => {

    switch (action.type) {
      case 'ERROR': return {
        ...state,
        error: true
      }
      case 'SUCCES': return{
        ...state,
        error: false,
        loading: false,
        sincronizedItem: true,
        item: action.payload
      }
      case 'UPDATE': return{
        ...state,
        item: action.payload
      }
      case 'SINCRONIZED': return{
        ...state,
        loading: true,
        sincronizedItem: false
      }

    }
  
}

export default useLocalStorage;