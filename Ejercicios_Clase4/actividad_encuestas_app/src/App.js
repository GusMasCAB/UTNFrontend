import React, {useState} from 'react';
import './App.css';
import Encuestas from "./components/Encuentas";

function App() {
  const encuestas = [
    {id: 1, pregunta: "¿Cuál es tu color favorito?", 
    opciones: ["Rojo", "Azul", "Verde", "Amarillo"]},
    {id: 2, pregunta: "¿Cuál es tu comida favorita?", 
    opciones: ["Pizza", "Ensalada", "Tacos", "Hamburguesa"]}
  ];
  return (
    <div className="App">
        <h1>Aplicacion de Encuestas</h1>
        <Encuestas encuestas={encuestas} />
    </div>
  );
}

export default App;
