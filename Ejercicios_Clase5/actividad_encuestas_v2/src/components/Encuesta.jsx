import React from "react";
import {Link,useParams} from 'react-router-dom';
const Encuesta =  ({encuestas})=>{
    const { id } = useParams();
    const encuesta = encuestas.find(encuesta=> encuesta.id===parseInt(id));
    return(
        <div className="encuesta-item-container">
            <h2>{encuesta.titulo}</h2>
            <p>{encuesta.descripcion}</p>
            <h2>Preguntas:</h2>
            <div>
                <p>
                    {!encuesta.preguntas && <p>Esta encuesta no tiene preguntas</p>}
                    {encuesta.preguntas && encuesta.preguntas.map(pregunta=>(
                        <div key={pregunta.id}>
                        <p>{pregunta.pregunta}</p>
                        <ol>
                            {
                                pregunta.opciones.map(opc=>(
                                    <li key={opc.id}>{opc.texto}</li>
                                ))
                            }
                        </ol>
                        </div>
                    ))}
                </p>
            </div>
            <Link to='/'>Volver al Menú</Link>
        </div>
    );
}
export default Encuesta;