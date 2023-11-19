// Selecciona el primer elemento HTML con la clase "materias" y lo asigna a la variable materiasHTML.
const materiasHTML = document.querySelector(".materias");

// Un array de objetos que representa diferentes materias con sus respectivas notas.
const materias = [
  {
    nombre: "Fisica 4",
    nota: 7,
  },
  {
    nombre: "Calculo 3",
    nota: 9,
  },
  {
    nombre: "Base de Datos 3",
    nota: 8,
  },
  {
    nombre: "Matematicas Discretas 2",
    nota: 5,
  },
  {
    nombre: "Programacion 4",
    nota: 6,
  },
];

// Una función que devuelve una Promise que se resuelve con la materia correspondiente al índice proporcionado.
const obtenerMateria = (id) => {
  return new Promise((resolve, reject) => {
    let materia = materias[id];
    if (materia == undefined) reject("la materia no existe");
    else
      setTimeout(() => {
        resolve(materia);
      }, Math.random() * 2400);
  });
};

// Una función asíncrona que itera sobre el array de materias y muestra la información en el HTML.
const devolverMaterias = async () => {
  // Un array para almacenar las materias obtenidas de manera asíncrona.
  let materia = [];
  
  // Itera sobre el array de materias.
  for (let i = 0; i < materias.length; i++) {
    // Espera a que la Promise devuelta por obtenerMateria se resuelva antes de continuar.
    materia[i] = await obtenerMateria(i);

    // Crea un nuevo fragmento de HTML con la información de la materia actual.
    let newHTMLCode = `
      <div class="materia">
        <div class="nombre">${materia[i].nombre}</div>
        <div class="nota">${materia[i].nota}</div>
      </div>`;

    // Agrega el nuevo fragmento de HTML al contenido existente en materiasHTML.
    materiasHTML.innerHTML += newHTMLCode;
  }
};

// Llama a la función devolverMaterias para iniciar el proceso de obtención y visualización de materias.
devolverMaterias();

