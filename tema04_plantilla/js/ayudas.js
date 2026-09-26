/*
  ayudas.js · Funciones de ayuda de la tarea 4 (DWEC 26/27)

  NO MODIFIQUES ESTE ARCHIVO.

  Estas funciones leen las casillas de la página y escriben en la zona de resultado. Eso es el DOM,
  y lo veremos más adelante. De momento, úsalas como usas alert() o console.log(), sin más:

    leerNumero("numero1")        Devuelve el número escrito en la casilla con id="numero1".
                                 Si la casilla está vacía o no tiene un número, devuelve NaN.

    limpiarSalida()              Vacía la zona de resultado.

    mostrar(texto, color)        Vacía la zona de resultado y muestra el texto en un aviso de Bootstrap.
                                 color: "success" (verde, el que se usa si no pones nada), "danger" (rojo),
                                 "warning" (amarillo), "info" (azul claro)...

    anadirLinea(texto)           Añade una línea de texto a la zona de resultado, sin borrar lo que ya hay.

    anadirBadge(texto, color)    Añade un badge de Bootstrap a la zona de resultado, sin borrar lo que ya hay.
                                 color: "primary" (azul, el que se usa si no pones nada), "secondary",
                                 "success", "danger", "warning", "info"...

  Para que funcionen, index.html tiene que tener:
    · las casillas <input id="numero1"> y <input id="numero2">;
    · la zona de resultado <div id="salida"></div>;
    · este archivo enlazado ANTES que js/app.js.
*/

function leerNumero(id) {
  const casilla = document.getElementById(id);
  if (casilla === null) {
    console.error(`leerNumero: no hay ninguna casilla con id="${id}" en la página`);
    return NaN;
  }
  const texto = casilla.value.trim();
  return texto === "" ? NaN : Number(texto);
}

function zonaDeSalida() {
  const salida = document.getElementById("salida");
  if (salida === null) {
    console.error('Falta la zona de resultado: <div id="salida"></div>');
  }
  return salida;
}

function limpiarSalida() {
  const salida = zonaDeSalida();
  if (salida !== null) {
    salida.replaceChildren();
  }
}

function mostrar(texto, color = "success") {
  const salida = zonaDeSalida();
  if (salida !== null) {
    const aviso = document.createElement("div");
    aviso.className = `alert alert-${color} mb-0`;
    aviso.setAttribute("role", "alert");
    aviso.textContent = texto;
    salida.replaceChildren(aviso);
  }
}

function anadirLinea(texto) {
  const salida = zonaDeSalida();
  if (salida !== null) {
    const linea = document.createElement("div");
    linea.textContent = texto;
    salida.append(linea);
  }
}

function anadirBadge(texto, color = "primary") {
  const salida = zonaDeSalida();
  if (salida !== null) {
    const badge = document.createElement("span");
    badge.className = `badge text-bg-${color} me-1 mb-1`;
    badge.textContent = texto;
    salida.append(badge);
  }
}
