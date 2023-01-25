import React from 'react';
import '../estilos/Titulo.css';

function Titulo (props) {
  return(
    <div className='titulo'>
      <div className='click' data-text= {props.letra} style={{ color: props.color }} >
        <span>{props.letra}</span>
      </div>
    </div>
  );

}

export default Titulo;