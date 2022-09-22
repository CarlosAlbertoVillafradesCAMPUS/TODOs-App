import React from "react";
import {useStorageListener} from "../hooks/useStorageListener";
import '../styles/ChangeAlert.css';

const ChangeAlert = ({sincronize}) => {

  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>
            Parece hubo un cambio en tus TO DOs en otra pestaña o ventana del
            navegador.
          </p>
          <p>¿Quieres sincronizar tus TO DOs?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ChangeAlert;