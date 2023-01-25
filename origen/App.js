import { useState } from 'react';
import './App.css';
import Botones from './componentes/Botones';
import PantallaContador from './componentes/PantallaContador';
import Titulo from './componentes/Titulo';

function App() {

  const [numClicks , setNumClicks] = useState(0);
  const [mensaje, setMensaje] = useState("");
  

  const sumarClicks = () => {
    setNumClicks(numClicks +1);
    setMensaje("+1")
  
  }

  const reiniciarContador = () => {
    setNumClicks(0);
    setMensaje("Ups! Vamos de 0")
    
  }

  return (
    <div className="App">
      <div className='contenedor-contador'>
        <div className='header'>
          <Titulo 
            letra='C'
            color= '#a001f5'
          />
          <Titulo 
            letra='l'
            color= '#df57fa'
          />
          <Titulo 
            letra='i'
            color= '#fd7edd'
          />
          <Titulo 
            letra='c'
            color= '#c890fb'
          />
          <Titulo 
            letra='k'
            color= '#0daaff'
          />
        </div>    

          <PantallaContador
            numClicks={numClicks} 
          />
          <Botones
            nombreB='CLICK'
            esClick={true}
            controlarClicks={sumarClicks}
          />
          <Botones
            nombreB='REINICIAR'
            esClick={false}
            controlarClicks={reiniciarContador}
          />
          <p className='mensaje'>{mensaje}</p>

      </div>     
    </div>
  );
}

export default App;
