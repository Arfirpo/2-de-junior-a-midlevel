/*  Historia de Cofla 8  */

//Problema 1

function problemaCofla3(params) {
  const inputName = document.getElementById("name");
  const inputEmail = document.getElementById("email");
  const inputAsignature = document.getElementById("asignature");
  const button = document.querySelector("button");
  const result = document.querySelector(".result");
  
  button.addEventListener("submit", (e) => {
    e.preventDefault();
    let error = validarCampos(inputName);
    if (error[0]) {
      result.innerHTML = error[1];
      result.classList.remove("green");
      result.classList.add("red");
    } else {
      // Crear nodo <p> con el texto y la clase adecuados
      const successMessage = document.createElement("p");
      successMessage.textContent = "Solicitud enviada correctamente";
      successMessage.classList.add("green");
      
      // Insertar el nuevo nodo antes del botón
      button.parentNode.insertBefore(successMessage, button.nextSibling);
  
      // Eliminar mensajes anteriores y clases del resultado original
      result.innerHTML = "";
      result.classList.remove("green", "red");
    }
  });
  
  function validarCampos(inputElement){
    characterValidRange(inputElement);
  };
  
  function characterValidRange(inputElement) {
    let error = [false, ""];
    if (inputElement.value.length < 5) {
      error[0] = true;
      error[1] = "El campo no puede tener menos de 5 caracteres";
    } else if (inputElement.value.length > 40) {
      error[0] = true;
      error[1] = "El campo no puede tener más de 40 caracteres";
    }
    return error;
  }
}

// problemaCofla3();

//Problema 2

function problemaDeCofla4(params) {
  // Arreglo de alumnos con información sobre nombre, email y materia
  const alumnos = [
    {
      nombre: "Agustin Firpo",
      email: "agustin_firpo@outlook.com.ar",
      materia: "derecho social",
    },
    {
      nombre: "Martin Giugovaz",
      email: "huevo@outlook.com.ar",
      materia: "derecho de la navegación",
    },
    {
      nombre: "Lucas Jurado",
      email: "kylu@outlook.com.ar",
      materia: "derecho de guerra ",
    },
    {
      nombre: "Gianfranco Canziani",
      email: "gianette@outlook.com.ar",
      materia: "obra publica",
    },
    {
      nombre: "Ariel Seara",
      email: "chicho@outlook.com.ar",
      materia: "derecho comercial",
    },
    {
      nombre: "Santiago Echeverria",
      email: "sancho@outlook.com.ar",
      materia: "derecho ambiental",
    },
  ];
  
  // Selecciona el botón de confirmación y el contenedor donde se mostrará la información
  const boton = document.querySelector(".boton-confirmar");
  const contenedor = document.querySelector(".grid-container");
  
  // Variable para almacenar el HTML generado
  let htmlCode = "";
  
  // Genera el HTML para cada estudiante y lo agrega al contenedor
  for (let alumno of alumnos) {
    let nombre = alumno["nombre"];
    let email = alumno["email"];
    let materia = alumno["materia"];
    // Construye el código HTML para cada estudiante y su respectivo selector de semana
    htmlCode += `
      <div class="grid-items nombre">${nombre}</div>
      <div class="grid-items email">${email}</div>
      <div class="grid-items materia">${materia}</div>
      <div class="grid-items semana">
        <select id="semanas" class="semana-elegida">
          <option value="Semana 1">Semana 1</option>
          <option value="Semana 2">Semana 2</option>
        </select>
      </div>`;
  }
  
  // Agrega el HTML generado al contenedor
  contenedor.innerHTML = htmlCode;
  
  // Agrega un evento de clic al botón de confirmación
  boton.addEventListener("click", () => {
    // Pregunta al usuario si realmente quiere confirmar las mesas
    let confirmar = confirm("¿Realmente quieres confirmar las mesas?");
  
    // Si el usuario confirma, realiza las acciones siguientes
    if (confirmar) {
      // Elimina el botón de confirmación del cuerpo del documento
      document.body.removeChild(boton);
  
      // Obtiene todos los elementos con la clase "semana"
      let elementos = document.querySelectorAll(".semana");
  
      // Obtiene todos los elementos con la clase "semana-elegida"
      let semanasElegidas = document.querySelectorAll(".semana-elegida");
  
      // Itera sobre los elementos y asigna el valor elegido de la semana
      for (let i = 0; i < elementos.length; i++) {
        semana = elementos[i];
        semana.innerHTML = semanasElegidas[i].value;
      }
    }
  });
}

// problemaDeCofla4();
