// Definición de la clase Persona
class Persona {
  // Constructor que inicializa las propiedades de la persona
  constructor(nombre, instagram) {
    this.nombre = nombre;
    this.instagram = instagram;
  }
}

// Datos iniciales para crear instancias de Persona
const data = [
  ["Agustin FIrpo", "@firpoagus"],
  ["Gianfranco Canziani", "@cangian"],
  ["Lucas Jurado", "@el_kylu"],
  ["Santiago Echeverria", "@lasan-chija"],
];

// Array para almacenar instancias de Persona
let personas = [];

// Creación de instancias de Persona a partir de los datos iniciales
for (let i = 0; i < data.length; i++) {
  personas[i] = new Persona(data[i][0], data[i][1]);
}

// Función que devuelve una promesa para obtener información de una persona por su índice
const obtenerPersona = (id) => {
  return new Promise((resolve, reject) => {
    if (personas[id] == undefined) {
      reject("No se encontró la persona");
    } else {
      // Resuelve la promesa con un objeto que contiene la persona y el id
      resolve({ persona: personas[id], id });
    }
  });
};

// Función que devuelve una promesa para obtener el Instagram de una persona por su índice
const obtenerInstagram = (id) => {
  return new Promise((resolve, reject) => {
    const persona = personas[id];
    if (persona && persona.instagram !== undefined) {
      // Verifica que la persona existe y tiene la propiedad 'instagram'
      resolve(persona.instagram);
    } else {
      reject("No se encontró el Instagram");
    }
  });
};

// Uso de Promesas para obtener información y mostrarla en consola
obtenerPersona(3)
  .then(({ persona, id }) => {
    // Imprime el nombre de la persona obtenido de la primera promesa
    console.log("Nombre de la persona:", persona.nombre);
    // Retorna una nueva promesa para obtener el Instagram
    return obtenerInstagram(6);
  })
  .then((instagram) => {
    // Imprime el Instagram obtenido de la segunda promesa
    console.log("Instagram de la persona:", instagram);
  })
  .catch((error) => {
    // Captura y maneja cualquier error ocurrido en las promesas anteriores
    console.log(error);
  });

