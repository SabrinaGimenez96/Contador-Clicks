import React from 'react';
import '../estilos/PantallaContador.css';


function PantallaContador ({numClicks}){
    return(
        <div className='contador'>
            {numClicks}
        </div>
    );
}

export default PantallaContador;