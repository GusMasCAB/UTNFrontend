//Funciones para agregar nuevas tareas
function agregarTarea(){
  const inputTarea = document.getElementById("inputTarea"); //Obtenemos el elemento con id="inputTarea"
  const ulTareas = document.getElementById("ulTareas"); //Obtenemos el elemento con id="ulTareas"

  const nuevaTarea = inputTarea.value.trim();// obtenemos el texto ingresado por el usuario

  if(nuevaTarea != null && nuevaTarea!=""){
    const liTarea = document.createElement("li"); //creamos un nuevo elemento li
    liTarea.textContent = nuevaTarea;      //le guardamos el texto ingresado por el usuario

    const btnEliminar = document.createElement("button"); //creamos un nuevo elemento button
    btnEliminar.textContent = "Eliminar"; //le asignamos el texto "Eliminar"
    btnEliminar.className = "delete";
    btnEliminar.onclick = () => {ulTareas.removeChild(liTarea)};

    liTarea.appendChild(btnEliminar);
    ulTareas.appendChild(liTarea);
    inputTarea.value = "";
  };
}

/*classList.toggle(): // Alternar una clase (agregar si no está presente, eliminar si está presente)
Esto es útil cuando deseas cambiar dinámicamente la apariencia o el comportamiento de un elemento.*/ 
function marcarCompletada(liTarea){
  liTarea.classList.toggle("completed");
}

/*agregamos el evento click a los elementos  li.
addEventListener(): // Agregar escuchador de eventos. Sele pasa como argumento un evento y
una funcion que recibe como argumento un evento*/
document.getElementById("ulTareas").addEventListener("click", (evento) => {
  if(evento.target.tagName === "LI")
    marcarCompletada(evento.target);
});

//otra forma de agregar los eventos es con el id del elemento
/*Cuando pasas la función agregarTarea como argumento a addEventListener, no debes usar paréntesis () 
después del nombre de la función. Esto se debe a que, al usar paréntesis, estarías llamando a la función 
inmediatamente y pasando el resultado de esa llamada a addEventListener. En su lugar, quieres que addEventListener 
tenga una referencia a la función agregarTarea para que pueda ejecutarla más tarde, cuando ocurra el evento.*/ 
document.getElementById("agregar").addEventListener("click", agregarTarea);

function mostrarCompletadas(){
  const liTareas = document.querySelectorAll("li");

  for (const tarea of liTareas) {
    if(tarea.classList.contains("completed")){
      tarea.style.display = "flex";
    }else{
      tarea.style.display = "none";
    }
  }
}

document.getElementById("completadas").addEventListener("click",mostrarCompletadas);

function mostrarPendientes(){
  const liTareas = document.querySelectorAll("li");

  for (const tarea of liTareas) {
    if(tarea.classList.contains("completed")){
      tarea.style.display = "none";
    }else{
      tarea.style.display = "flex";
    }
  }
}

document.getElementById("pendientes").addEventListener("click",mostrarPendientes);