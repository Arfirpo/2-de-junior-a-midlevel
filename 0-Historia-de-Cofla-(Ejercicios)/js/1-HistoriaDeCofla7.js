/*  Historia de Cofla 7  */

//Problema 1

function problemaCofla1() {
  let alto = window.screen.availHeight;
  let ancho = window.screen.availWidth;
  let comprar = confirm(
    `El alto es: ${alto} y el ancho es${ancho}, ¿desea continuar la compra?`
  );

  if (comprar) {
    alert("Compra Exitosa");
  } else {
    alert("compra cancelada");
  }
}

// problemaCofla1();

//Problema 2

function problemaDeCofla2() {
  let href = window.location.href;
  let pathName = window.location.pathname;
  let hostName = window.location.hostname;
  let url = window.location.url;
  let protocolo = window.location.protocol;
  
  let html = `Protocolo: <b>${protocolo}</b><br>`;
  html += `HostName: <b>${hostName}</b><br>`;
  html += `PathName: <b>${pathName}</b><br>`;
  html += `Url: <b>${url}</b><br>`;
  html += `Href: <b>${href}</b><br>`;
  
  document.write(html);
}

// problemaDeCofla2();
