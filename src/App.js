import './App.css';
import LogoContador from './images/timer.jpg'
import Boton from './components/Boton'
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
    console.log("State: ", contador);
  }

  const reinciaContador = () => {
    setContador(0);
  }

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img 
          className='logo'
          src={LogoContador}
          alt='Logo contador'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClicks={contador}
        />
        <Boton
          texto="Click"
          esBotonDeClick={true}
          eventClick={aumentarContador}
        />

        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          eventClick={reinciaContador}
        />

      </div>
    </div>
  );
}

export default App;
