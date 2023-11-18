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

// Función para obtener información de una persona por su índice
const obtenerPersona = (id, cb) => {
  // Verifica si la persona con el índice id existe
  if (personas[id] == undefined) {
    cb("no se encontró la persona");
  } else {
    // Llama al callback con null (sin error), la persona y el id
    cb(null, personas[id], id);
  }
};

// Función para obtener el Instagram de una persona por su índice
const obtenerInstagram = (id, cb) => {
  // Verifica si el Instagram de la persona con el índice id existe
  if (personas[id].instagram == undefined) {
    cb("no se encontró el instagram");
  } else {
    // Llama al callback con null (sin error) y el Instagram
    cb(null, personas[id].instagram);
  }
};

// Uso de las funciones para obtener información y mostrarla en consola
obtenerPersona(3, (err, persona, id) => {
  if (err) {
    // Manejo de error si no se encuentra la persona
    console.log(err);
  } else {
    // Imprime el nombre de la persona
    console.log("Nombre de la persona:", persona.nombre);

    // Llama a la función para obtener el Instagram de la persona
    obtenerInstagram(id, (err, instagram) => {
      if (err) {
        // Manejo de error si no se encuentra el Instagram
        console.log(err);
      } else {
        // Imprime el Instagram de la persona
        console.log("Instagram de la persona:", instagram);
      }
    });
  }
});



