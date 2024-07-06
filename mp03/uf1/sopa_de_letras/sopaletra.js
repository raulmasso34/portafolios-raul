// Definición de constantes para el tamaño de la sopa de letras y la lista de palabras a encontrar

const numFilas = 15;
const numColumnas = 15;
const facil = ["WHISKY", "ZIGZAG","ISRAEL", "AVISAR", "BISTEC"];
const medio = ["ACIERTO","JUZGADO","AMERICA", "CONOCER","HERMOSO", "PROCESO"];
const dificil = ["ABEJONES", "CABEZAZO", "BARBADOS", "PORTUGAL", "PAKISTAN", "MONGOLIA", "MALDIVAS"];
 let palabras = facil;
 //no se como implementar el sort para poder adivinar las palabras del orden que quiera
 //por lo que hace y he buscado solo ordena las palabras alfabeticamente
facil.sort();
medio.sort();
dificil.sort();
let totalPalabras = palabras.length;
;
// Agrega esta variable para rastrear el total de palabras
let palabrasEncontradas = 0; // Agrega esta variable para rastrear cuántas palabras se han encontrado

// Generación de la sopa de letras con palabras colocadas
let sopa = generarSopa(numFilas, numColumnas, palabras);


// Variable para almacenar la palabra seleccionada por el usuario
let palabraSeleccionada = '';
// Constante que almacena una ID para cada nivel y su dificultad
let nivelDif=0;

// listeners
document.addEventListener("DOMContentLoaded",function(){
// Llamadas a las funciones para mostrar la sopa de letras y la lista de palabras
  displaySopa(sopa);
  displayPalabras(palabras);
});


// Funcion para cambial el nivel de dificultad

function cambiarNivel (nivel){
  switch (nivel){
    case 'facil':
      palabras = facil;
      //Cada cambio de nivel, se revisa la ID del "nivelDif" y la cantidad de palabras para encontrar
      nivelDif=0;
      totalPalabras = palabras.length;
      reiniciarContador();
      actualizarPuntuacion(); 
      break;
    case 'medio':
      palabras = medio;
      //Cada cambio de nivel, se revisa la ID del "nivelDif" y la cantidad de palabras para encontrar
      nivelDif=1;
      totalPalabras = palabras.length;
      reiniciarContador();
      actualizarPuntuacionm(); 
      break;
    case 'dificil':
      palabras = dificil;
      //Cada cambio de nivel, se revisa la ID del "nivelDif" y la cantidad de palabras para encontrar
      nivelDif=2;
      totalPalabras = palabras.length;
      reiniciarContador();
      actualizarPuntuaciond();
  }
  reiniciarJuego();
  
  
     // Reinicia el contador de tiempo
 }
 
 

// FUNCION TIEMPO RECORD
// FUNCION ACTUALIZAR PUNTUACION
function actualizarPuntuacion() {
  const puntuacionElement = document.getElementById('puntuacion');
  if (puntuacionActual[nivelDif=0].tiempo != 0) {
      puntuacionElement.textContent = `Mejor tiempo(nivel facil): ${formatoTiempo(puntuacionActual[nivelDif=0].tiempo)}`;
  } else {
      puntuacionElement.textContent = 'Mejor tiempo(nivel facil): --:--';
  }
 }
 function actualizarPuntuacionm() {
  const puntuacionElement = document.getElementById('puntuacionm');
  if (puntuacionActual[nivelDif=1].tiempo != 0) {
      puntuacionElement.textContent = `Mejor tiempo(nivel medio): ${formatoTiempo(puntuacionActual[nivelDif=1].tiempo)}`;
  } else {
      puntuacionElement.textContent = 'Mejor tiempo(nivel medio): --:--';
  }
 }
 function actualizarPuntuaciond() {
  const puntuacionElement = document.getElementById('puntuaciond');
  if (puntuacionActual[nivelDif=2].tiempo != 0) {
      puntuacionElement.textContent = `Mejor tiempo (nivel dificil): ${formatoTiempo(puntuacionActual[nivelDif=2].tiempo)}`;
  } else {
      puntuacionElement.textContent = 'Mejor tiempo(nivel dificil): --:--';
  }
 }
 
 // Funcion para reiniciar el juego.
 function reiniciarJuego(){
    let sopa = generarSopa(numFilas,numColumnas,palabras);
    displaySopa(sopa);
    displayPalabras(palabras);
 }
 
 
 // Función para generar la sopa de letras
 function generarSopa(filas, columnas, palabras) {
    // Código para generar la sopa de letras con palabras
    const sopa = new Array(filas);
    for (let i = 0; i < filas; i++) {
        sopa[i] = new Array(columnas);
        for (let j = 0; j < columnas; j++) {
            sopa[i][j] = obtenerLetraAleatoria();
        }
    }
    for (const palabra of palabras) {
        colocarPalabra(sopa, palabra);
    }
    return sopa;
 }
 
 

 
 
 // Función para mostrar la sopa de letras en la página
 function displaySopa(sopa) {
    const table = document.getElementById("sopaDeLetras");
    table.innerHTML = "";
    for (const fila of sopa) {
        const row = document.createElement("tr");
        for (const letra of fila) {
        const cell = document.createElement("td");
        cell.textContent = letra;
        cell.addEventListener("click", function () {
        if (cell.classList.contains("found")) {
            cell.classList.remove("found");
            palabraSeleccionada = palabraSeleccionada.replace(letra, '');
        } else {
            cell.classList.add("found");
            palabraSeleccionada += letra;
        }
    });
        row.appendChild(cell);
        }
        table.appendChild(row);
    }
 }
 
 
 // Función para mostrar la lista de palabras a encontrar
 function displayPalabras(palabras) {
    const ul = document.getElementById("wordList");
    ul.innerHTML = "";
    for (const palabra of palabras) {
        const li = document.createElement("li");
        li.textContent = palabra;
        ul.appendChild(li);
    }
 }
 
 
 // Función para buscar la palabra seleccionada por el usuario
 function encontrarPalabra() {
    if (palabras.includes(palabraSeleccionada)) {
        alert("Has acertado una palabra");
        resaltarPalabraEnSopa(palabraSeleccionada);
        tacharPalabraEnLista(palabraSeleccionada);
        palabrasEncontradas++; // Incrementa el contador de palabras encontradas
    }
    else {
        alert("Palabra no encontrada");
        limpiarResaltadoSopa(); // Agregar esta línea para limpiar el resaltado de la sopa
    }
    palabraSeleccionada = '';
 
 
    if (palabrasEncontradas === totalPalabras) { // Comprueba si se han encontrado todas las palabras
        alert("Felicidades, has terminado la sopa de letras. Tu tiempo a sido de: " + minutos + ":" + segundos);
        reiniciarSopa(); // Llama a la función para reiniciar la sopa de letras
        reiniciarContador();// Reinicia el contador de tiempo
    }
 }
 
 
 // Función para reiniciar la sopa de letras
 function reiniciarSopa() {
    // FUNCION ACTUALIZAR PUNTUACIÓN 
    // En esta condición, si la puntuación del nivelen especifico que es el "tiempo" és mas pequeño que la puntuación almacenada, se remplaza. Si no hay puntuación, se almacena la puntuación lograda
    if (puntuacionActual[nivelDif].tiempo == 0 || minutos * 60 + segundos < puntuacionActual[nivelDif].tiempo) {
        puntuacionActual[nivelDif].tiempo = minutos * 60 + segundos;
        actualizarPuntuacion(); // Llama a la función para actualizar la puntuación en la interfaz
        actualizarPuntuacionm();
        actualizarPuntuaciond();
    } 
    
 
 
    palabrasEncontradas = 0; // Reinicia el contador de palabras encontradas
    sopa = generarSopa(numFilas, numColumnas, palabras); // Genera una nueva sopa de letras
    displaySopa(sopa); // Muestra la nueva sopa de letras
    displayPalabras(palabras); // Muestra la lista de palabras
 }
 
 
 // Función para resaltar la palabra en la sopa de letras
 function resaltarPalabraEnSopa() {
    const table = document.getElementById("sopaDeLetras");
    const cells = table.getElementsByTagName("td");
    for (const cell of cells) {
          if (cell.classList.contains("found")) {
              cell.classList.remove("found");
              // apartados para cambiar los colores de las celdas y letras
              cell.style.backgroundColor = "brown";
              cell.style.color = "black";
        }
    }
 }
 
 
 // Función para verificar si se puede seleccionar la letra
 function Seleccionar(fila, columna) {
    if ( filaSeleccionada === -1 &&  columnaSeleccionada === -1) { // Primera selección, siempre se permite
  
   } else if (fila == filaSeleccionada || columna == columnaSeleccionada) { // La fila o columna coinciden, se permite la selección
  
   } else { // No se permite seleccionar letras en diferentes filas y columnas
    return ;
  }
 }
 
 
 // Función para tachar la palabra en la lista de palabras
 function tacharPalabraEnLista(palabra) {
  const ul = document.getElementById("wordList");
  const lis = ul.getElementsByTagName("li");
  for (const li of lis) {
    if (li.textContent === palabra) {
      li.innerHTML = `<del>${palabra}</del>`;
    }
  }
 }
 
 
 // Función para limpiar el resaltado de la sopa de letras
 function limpiarResaltadoSopa() {
  const table = document.getElementById("sopaDeLetras");
  const cells = table.getElementsByTagName("td");
  for (const cell of cells) {
    if (cell.classList.contains("found")) {
      cell.classList.remove("found");
    }
  }
 }
 
 
 // Funcion que crea la tabla de sopa de letras
 function generarSopa(filas, columnas, palabras) {
  const sopa = new Array(filas);
  for (let i = 0; i < filas; i++) {
    sopa[i] = new Array(columnas);
  }
  for (const palabra of palabras) {
    colocarPalabra(sopa, palabra);
  }
  llenarCeldasVacias(sopa); // Rellenar celdas vacías con letras aleatorias
  return sopa;
 }
 
 
 // Funcion para colocar la palabra de forma Horizontal o vertical mediante un RANDOM
 function colocarPalabra(sopa, palabra) {
  const filas = sopa.length;
  const columnas = sopa[0].length;
  const direccion = Math.random() < 0.5 ? "horizontal" : "vertical";
  let fila, columna;
  if (direccion === "horizontal") {
    do {
      fila = Math.floor(Math.random() * filas);
      columna = Math.floor(Math.random() * (columnas - palabra.length + 1));
    } while (superponeHorizontal(sopa, palabra, fila, columna));
    for (let i = 0; i < palabra.length; i++) {
      sopa[fila][columna + i] = palabra[i];
    }
  } else {
    do {
      fila = Math.floor(Math.random() * (filas - palabra.length + 1));
      columna = Math.floor(Math.random() * columnas);
    } while (superponeVertical(sopa, palabra, fila, columna));
    for (let i = 0; i < palabra.length; i++) {
      sopa[fila + i][columna] = palabra[i];
    }
  }
 }
 
 
 // FUNCION SOBREPONER PALABRAS
 //Funcion para verficar y implemetar la palabra en horizontal , cuando esta puesta en la tabla , las celdas dan un TRUE para avisar que esta repleta esas celdas, si no regresa un FALSE
 function superponeHorizontal(sopa, palabra, fila, columna) {
  for (let i = 0; i < palabra.length; i++) {
    if (columna + i >= sopa[0].length || sopa[fila][columna + i] !== undefined) {
      return true;
    }
  }
  return false;
 }
 
 
 //Funcion para verficar y implemetar la palabra en vertical , cuando esta puesta en la tabla , las celdas dan un TRUE para avisar que esta repleta esas celdas, si no regresa un FALSE
 function superponeVertical(sopa, palabra, fila, columna) {
  for (let i = 0; i < palabra.length; i++) {
    if (fila + i >= sopa.length || sopa[fila + i][columna] !== undefined) {
      return true;
    }
  }
  return false;
 }
 
 
 // Funcion para llenar las celdas vacias
 function llenarCeldasVacias(sopa) {
  const filas = sopa.length;
  const columnas = sopa[0].length;
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (sopa[i][j] === undefined) {
        sopa[i][j] = letras.charAt(Math.floor(Math.random() * letras.length));
      }
    }
  }
 }
 
 
 // FUNCION RELOJ
 let segundos = 0;
 let minutos = 0;
 
 
 function actualizarContador() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  const minutosStr = minutos < 10 ? '0' + minutos : minutos;
  const segundosStr = segundos < 10 ? '0' + segundos : segundos;
  document.getElementById('contador').textContent = minutosStr + ':' + segundosStr;
 }
 
 
 const miContador = setInterval(actualizarContador, 1000);
 
 
 // FUNCION REINICIAR TIEMPO CONTADOR
 function reiniciarContador() {
  segundos = 0;
  minutos = 0;
  document.getElementById('contador').textContent = '00:00'; // Actualiza el contador en la interfaz
 }
 
 
 // VARIABLE TIEMPO
 let puntuacionActual=[{nivel: 'facil', tiempo: 0},
  {nivel: 'medio', tiempo: 0},
  {nivel: 'dificil', tiempo: 0},
 ];
 
 

 
 
 function formatoTiempo(tiempo) {
  const minutos = Math.floor(tiempo / 60);
  const segundos = tiempo % 60;
  const minutosStr = minutos < 10 ? '0' + minutos : minutos;
  const segundosStr = segundos < 10 ? '0' + segundos : segundos;
  return `${minutosStr}:${segundosStr}`;
 }
 
 function findFirstLetterCell(word) {
  for (let i = 0; i < numFilas; i++) {
    for (let j = 0; j < numColumnas; j++) {
      if (sopa[i][j] === word.charAt(0) && !isPartOfAnotherWord(i, j, word)) {
        return { fila: i, columna: j };
      }
    }
  }
  return null;
}



 