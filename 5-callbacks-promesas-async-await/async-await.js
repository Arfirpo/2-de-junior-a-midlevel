// Definición de un objeto llamado 'objeto' con tres propiedades y sus respectivos valores.
const objeto = {
  propiedad1: "valor 1",
  propiedad2: "valor 2",
  propiedad3: "valor 3",
};

// Definición de una función llamada 'obtenerInformacion' que devuelve una Promise.
// La función simula un retardo aleatorio antes de resolver la Promise.
const obtenerInformacion = (txt) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(txt);
    }, Math.random() * 200);
  });
};

// Definición de una función asíncrona llamada 'mostrarData'.
const mostrarData = async () => {
  // Se espera a que la Promise devuelta por 'obtenerInformacion' se resuelva.
  // Cada llamada a 'obtenerInformacion' simula un proceso asíncrono.
  data1 = await obtenerInformacion("1: agus");
  data2 = await obtenerInformacion("2: matt");
  data3 = await obtenerInformacion("3: tai");

  // Se imprime en la consola el resultado de cada llamada a 'obtenerInformacion'.
  console.log(data1);
  console.log(data2);
  console.log(data3);
};

// Llamada a la función 'mostrarData'.
mostrarData();
