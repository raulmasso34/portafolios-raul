let personajes = [
  { nombre: "Leo Messi",caracteristicas: ["hombre", "americano","barcelona", "mundial"], imagen: "messi.gif" },
  { nombre: "Alexia putellas", caracteristicas: ["mujer", "liga_española","champions", "balon_de_oro"],imagen: "alexia.gif" },
  { nombre: "Cristiano Ronaldo", caracteristicas: ["hombre", "europeo", "maximo_goleador"] ,imagen: "cr7.gif"},
  { nombre: "Cascarino", caracteristicas: ["mujer", "liga_francesa", "veloz"] ,imagen: "cascarino.gif"},
  { nombre: "Neymar", caracteristicas: ["hombre", "americano", "barcelona", "regateador"],imagen: "neymar.gif" },
  { nombre: "Jennifer Hermoso", caracteristicas: ["mujer", "liga_española", "pikito"],imagen: "pikito.gif" },
  { nombre: "James Rodriguez", caracteristicas: ["hombre", "americano", "madrid"],imagen: "james.gif" },
  { nombre: "Aitana Bonmati", caracteristicas: ["mujer", "liga_española", "champions","mejor_mundial"],imagen: "aitana.gif" },
];

let preguntaActual = 0;
let generoElegido = "";
let personajesRestantes = [...personajes]; // Copia de todos los personajes al principio

function empezar(){
  document.getElementById('pregunta').style.display = 'block';
  document.getElementById('tabla').style.display = 'none';
  document.getElementById('imagenes').style.display = 'none';
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('empezar').style.display = 'none';
  document.getElementById('intro').style.display = 'none';
  
}
function responder(respuesta) {
  
  if (preguntaActual === 0) {
    generoElegido = respuesta;
    if (respuesta === 'hombre') {
      personajesRestantes = personajesRestantes.filter(personaje => personaje.caracteristicas.includes('hombre'));
    } else {
      personajesRestantes = personajesRestantes.filter(personaje => personaje.caracteristicas.includes('mujer'));
    }
  } else {
    let caracteristica = preguntaActual === 1 ? (generoElegido === 'hombre' ? 'americano' : 'liga_española') : preguntaActual === 2 ? generoElegido === 'hombre' ? 'barcelona' : 'champions' : preguntaActual === 3 ? generoElegido === 'hombre' ? 'mundial' : 'balon_de_oro': '';
    if (respuesta === 'si') {
      personajesRestantes = personajesRestantes.filter(personaje => personaje.caracteristicas.includes(caracteristica));
    } else {
      personajesRestantes = personajesRestantes.filter(personaje => !personaje.caracteristicas.includes(caracteristica));
    }
  }


  siguientePregunta();
}


function siguientePregunta() {
  preguntaActual++;
  if (preguntaActual === 4 || personajesRestantes.length == 1) {
    mostrarResultado();
  } else {
    let preguntaTexto = preguntaActual === 1 ? (generoElegido === 'hombre' ? '¿Es un futbolista sudamericano?' : '¿Es una futbolista que ha juega en la liga española?') : preguntaActual === 2 ? (generoElegido === 'hombre' ? '¿Ha jugado en el barcelona?' : '¿Ha ganado una champions?') : (preguntaActual === 3 ? (generoElegido === 'hombre' ? '¿Ha ganado un mundial?' : '¿Ha ganado un balon de oro?') : '');
    document.getElementById('pregunta').innerHTML = `
      <p>${preguntaTexto}</p>
      <button onclick="responder('si')">Sí</button>
      <button onclick="responder('no')">No</button>
    `;
  }
}

function mostrarResultado() {
  document.getElementById('pregunta').style.display = 'none';
  document.getElementById('personaje-nombre').textContent = '¡Adiviné! Tu personaje es ' + personajesRestantes[0].nombre;
  document.getElementById('imagenes').style.display = 'block';
  document.getElementById('imagenes').src = personajesRestantes[0].imagen;
  document.getElementById('volver').style.display = 'block';
  
}
function volverAlInicio() {
  document.getElementById('pregunta').style.display = 'none';
  document.getElementById('tabla').style.display = 'block';
  document.getElementById('imagenes').style.display = 'none';
  document.getElementById('personaje-nombre').style.display = 'none';
  document.getElementById('empezar').style.display = 'block';
  document.getElementById('intro').style.display = 'block';
  document.getElementById('volver').style.display = 'none';
  document.getElementById('genero').style.display = 'block';
preguntaActual = 0;
  responder(respuesta);
  personajesRestantes = [...personajes];
}
