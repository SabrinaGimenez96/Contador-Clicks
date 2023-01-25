import React from 'react';
import '../estilos/Botones.css';

function Botones ({nombreB , esClick, controlarClicks}){
  return(
    <div className='contenedor-botones'>      
      <button className={ esClick ? 'boton-click' : 'boton-reiniciar' }
        onClick={controlarClicks} >        
        {nombreB} 
      </button>   
    </div>

  );
}

export default Botones;



