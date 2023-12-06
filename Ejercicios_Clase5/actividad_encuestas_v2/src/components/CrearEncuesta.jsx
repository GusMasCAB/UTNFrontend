import React from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

const NuevaEncuesta = ({agregarEncuesta})=>{
    const {register,handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data)=>{
        agregarEncuesta(data);
        navigate('/');
    }
    return(
        <div>
            <h1>Nueva encuesta</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="titulo">Titulo:</label>
                <input type="text" id="titulo" name="titulo"
                {... register('titulo',{required:'Este campo es obligatorio',
                            maxLength:{value:50, message:'Maximo de 50 caracteres'}})}/>
                {errors.titulo && <p>{errors.titulo.message}</p>}

                <label htmlFor="descripcion">Agregar la descripcion</label>
                <textarea id="descripcion" name="descripcion"
                {... register('descripcion',{required:'Este campo es obligatorio',
                            maxLength:{value:200, message:'Maximo de 200 caracteres'}})}/>
                {errors.descripcion && <p>{errors.descripcion.message}</p>}


                <button type='submit'>Confirmar</button>
            </form>
        </div>
    )
}
export default NuevaEncuesta;