import React from "react";

function Encuestas(props){
    return (
        <div id="encuestas">
            <h2>Encuestas Disponibles</h2>
            <ul>
                {
                    props.encuestas.map(encuesta => (
                        <li id="pregunta" key={encuesta.id}>{encuesta.pregunta}
                            <ul>
                                {encuesta.opciones.map(opcion=>(<li id="opcion">{opcion}</li>))}
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Encuestas;
