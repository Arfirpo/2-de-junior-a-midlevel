//Intervalos


// intervaloDe12Seg();

function intervaloDe12Seg() {

  //Forma de crear un intervalo de tiempo constante: se escribe la palabra Hola cada 2s
  const intervalo = setInterval(() => {
    document.write("Hola<br>");
  }, 2000);


  //Forma de terminar un intervalo de tiempo: finaliza el intervalo a los 12s
  setTimeout(() => {
    clearInterval(intervalo);
  }, 12000);
}

