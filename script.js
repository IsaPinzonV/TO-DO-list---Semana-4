const list = document.getElementById("lista-tareas");
const list1 = document.getElementById("lista-pendietes");
const list2 = document.getElementById("lista-completadas");

const listaActividades = [
    "Ejercicio de web",
    "Parcial de CTS",
    "Revisar Intu",
    "Lectura de Investigación",
    "Hacer ejercicio",
    "Salir a caminar",
    "Ver serie",
    "Lavar los platos",
    "Pasear el perro",
    "Organizar el mercado"
]

let c = '';

listaActividades.forEach(element => {
    c+=`<li>${element}</li>`;
    })

list.innerHTML=`<ul class='listaTareas'>
${c}
</ul>`;



