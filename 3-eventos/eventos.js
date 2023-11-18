const button = document.querySelector("button");
const input = document.querySelector("input");
const contenedorAzul = document.querySelector(".contenedor-azul");
const texto = document.querySelector("p");

/*  Key Events  */

// keyEvents(input);

function keyEvents(inputElement) {
  inputElement.addEventListener("keydown", (e) => {
    console.log("una tecla fue presionada");
  });

  inputElement.addEventListener("keypress", (e) => {
    console.log("un usuario presionó una tecla y la soltó");
  });

  inputElement.addEventListener("keyup", () => {
    console.log("una tecla fue soltada");
  });
}

/*  Interface Events  */

// displayEvents();

function displayEvents() {
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault;
    console.log("Esta por abandonar el sitio");
  });

  window.addEventListener("load", (e) => {
    console.log("se cargó la pagina");
  });

  window.addEventListener("resize", (e) => {
    e.preventDefault;
    console.log("se redimensionó el sitio");
  });

  input.addEventListener("select", (e) => {
    console.log("se ha seleccionado");
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    texto.innerText = textoCompleto.substring(start, end);
  });
}
