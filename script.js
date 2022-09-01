const listaActividades = [
  { nombre: "Ejercicio de web", estado: true },
  { nombre: "Parcial de CTS", estado: false },
  { nombre: "Revisar Intu", estado: true },
  { nombre: "Lectura de Investigación", estado: false },
  { nombre: "Hacer ejercicio", estado: true },
  { nombre: "Salir a caminar", estado: false },
  { nombre: "Ver serie", estado: true },
  { nombre: "Lavar los platos", estado: false },
  { nombre: "Pasear el perro", estado: true },
  { nombre: "Organizar el mercado", estado: false },
];

const tareasHtml = document.getElementById("lista-tareas");
const pendientesHtml = document.getElementById("lista-pendientes");
const completadasHtml = document.getElementById("lista-completadas");

function crearTareas(tarea) {
  //const tareasCompletadas = listaActividades.filter((tarea) => tarea.estado);
  //const tareasPendientes = listaActividades.filter((tarea) => !tarea.estado);

  tareasHtml.innerHTML = "";
  pendientesHtml.innerHTML = "";
  completadasHtml.innerHTML = "";

  listaActividades.forEach((tarea) => {
    const elem = document.createElement("li");

    elem.textContent = tarea["nombre"];
    elem.className = tarea.estado ? "checked" : "unchecked";
    elem.addEventListener('click', () => toggleCompletedTask(tarea))

    const cloneElem = elem.cloneNode(true);
    cloneElem.addEventListener('click', () => toggleCompletedTask(tarea))

    tareasHtml.append(elem);

    if (tarea.estado) {
      completadasHtml.append(cloneElem);
    } else {
      pendientesHtml.append(cloneElem);
    }
  });
}

crearTareas();

function toggleCompletedTask(item){
    item.estado = !item.estado;

    crearTareas();
}
