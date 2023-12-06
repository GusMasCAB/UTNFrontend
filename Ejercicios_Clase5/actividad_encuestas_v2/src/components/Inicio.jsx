import React from 'react';
import { Link } from 'react-router-dom';
/*
Cuando un usuario hace clic en un enlace creado con el componente <Link> de react-router-dom, 
el enrutador de React Router se encarga de cambiar la URL en el navegador sin recargar la página completa.
*/ 
export default function Inicio(props){
    return(
        <div>
            <h1>Encuestas disponibles</h1>
            {
                props.encuestas.map(encuesta=>(
                    <div className='encuesta-item-container'>
                        <div className='encuesta-item'>
                            <h2>{encuesta.titulo}</h2>
                            <p>{encuesta.descripcion}</p>
                        </div>
                        <Link to={`/encuesta/${encuesta.id}`}>Ver encuesta</Link>
                    </div>
                ))
            }
        </div>
    )
};