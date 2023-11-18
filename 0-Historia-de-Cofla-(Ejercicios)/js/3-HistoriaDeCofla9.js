// Obtener referencia al botón de envío
const sendButton = document.getElementById("snd-nota");

// Agregar evento de clic al botón de envío
sendButton.addEventListener("click", () => {
  // Declarar variables para el resultado y el mensaje
  let resultado, mensaje;

  try {
    // Obtener el valor ingresado y convertirlo a entero
    let prevRes = parseInt(document.getElementById("nota").value);

    // Verificar si la entrada no es un número
    if (isNaN(prevRes)) {
      throw "gracioso";
    }

    // Definir el mensaje según la puntuación
    mensaje = definirMensaje(prevRes);

    // Verificar si aprueba o desaprueba y obtener el resultado
    resultado = verificarAprobacion(8, 6, prevRes);
  } catch (e) {
    // Manejar el caso de error
    resultado = "¿sos gracioso?";
    mensaje = "descubrí que queres hackear el sitio";
  }

  // Mostrar el resultado y mensaje en un modal
  abrirModal(resultado[0], mensaje);
});

// Función para abrir el modal y mostrar el resultado y mensaje
const abrirModal = (res, msg) => {
  let modal = document.querySelector(".modal-bgn");
  document.querySelector(".resultado").innerHTML = res;
  document.querySelector(".mensaje").innerHTML = "Tu Prueba: " + msg;
  modal.style.display = "flex";
  modal.style.animation = "aparecer 1s forwards";
};

// Función para definir el mensaje según la puntuación
const definirMensaje = (pr) => {
  let resultado;
  switch (pr) {
    case 1:
      resultado = "no podes ser tan HDP";
      break;
    case 2:
      resultado = "sos malisimo para esta materia";
      break;
    case 3:
      resultado = "no sabes casi nada";
      break;
    case 4:
      resultado = "muy mal";
      break;
    case 5:
      resultado = "mal";
      break;
    case 6:
      resultado = "regular";
      break;
    case 7:
      resultado = "bien pero puede mejorar";
      break;
    case 8:
      resultado = "muy bien";
      break;
    case 9:
      resultado = "excelente";
      break;
    case 10:
      resultado = "insuperable holly shit";
      break;
    default:
      resultado = null;
      break;
  }
  return resultado;
};

// Función que verifica si un estudiante aprueba o desaprueba según su promedio
// Parámetros:
//   - nota1: La primera nota del estudiante (número)
//   - nota2: La segunda nota del estudiante (número)
//   - prevRes: La nota de la prueba previa del estudiante (número)
// Devuelve un array con dos elementos:
//   - El primer elemento es un string HTML que representa el estado de aprobación/desaprobación
//   - El segundo elemento es el promedio redondeado de las notas
const verificarAprobacion = (nota1, nota2, prevRes) => {
  // Calcular el promedio de las notas
  let promedio = (nota1 + nota2 + prevRes) / 3;

  // Verificar si el promedio es mayor o igual a 7
  if (promedio >= 7) {
    // Si aprueba, devuelve un array con un mensaje verde y el promedio redondeado
    return ['<span class="green">Aprobado</span>', Math.round(promedio)];
  } else {
    // Si desaprueba, devuelve un array con un mensaje rojo y el promedio redondeado
    return ['<span class="red">Desaprobado</span>', Math.round(promedio)];
  }
};
