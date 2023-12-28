import React from "react";
import '../styles/Boton.css';

function Boton({ texto, esBotonDeClick, eventClick }){

  return(
    <button
      className={esBotonDeClick ? "boton-click": "boton-reiniciar"}
      onClick={eventClick}
    >
      { texto }
    </button>
  );
}

export default Boton;