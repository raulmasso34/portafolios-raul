let personajes = [
  { nombre: "Leo Messi",caracteristicas: ["hombre", "americano", "mundial"], imagen: "messi.gif" },
  { nombre: "Alexia putellas", caracteristicas: ["mujer", "liga_española","champions", "balon_de_oro"],imagen: "alexia.gif" },
  { nombre: "Cristiano Ronaldo", caracteristicas: ["hombre", "europeo", "maximo_goleador"] ,imagen: "cr7.gif"},
  { nombre: "Cascarino", caracteristicas: ["mujer", "liga_francesa", "veloz"] ,imagen: "cascarino.gif"},
  { nombre: "Neymar", caracteristicas: ["hombre", "americano", "regateador"],imagen: "neymar.gif" },
  { nombre: "Jennifer Hermoso", caracteristicas: ["mujer", "liga_española", "pikito"],imagen: "pikito.gif" },
  { nombre: "Joaquin", caracteristicas: ["hombre", "europeo", "humorista"],imagen: "joaquin.gif" },
  { nombre: "Aitana Bonmati", caracteristicas: ["mujer", "liga_española", "champions","mejor_mundial"],imagen: "aitana.gif" },
];

let preguntaActual = 0;
let generoElegido = "";
let nacionalidad=[]
for(let i=0;i<personajes.length;i++){
  nacionalidad[i]=personajes[i].caracteristicas[1];
}
let posicion3=[]
for(let i=0;i<personajes.length;i++){
  nacionalidad[i]=personajes[i].caracteristicas[2];
}
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
      personajesRestantes = personajesRestantes.filter(personaje => !personaje.caracteristicas.includes("europeo") && !personaje.caracteristicas.includes("americano")&&!personaje.caracteristicas.includes("mundial") && !personaje.caracteristicas.includes("humorista")&& !personaje.caracteristicas.includes("maximo_goleador")&& !personaje.caracteristicas.includes("regateador"));
    } else {
      personajesRestantes = personajesRestantes.filter(personaje => !personaje.caracteristicas.includes("liga_francesa") && !personaje.caracteristicas.includes("liga_española")&&!personaje.caracteristicas.includes("mundial") && !personaje.caracteristicas.includes("mejor_mundial")&& !personaje.caracteristicas.includes("balon_de_oro")&& !personaje.caracteristicas.includes("veloz"));
    }
  } else {
    if (respuesta === 'si') {
      personajesRestantes = personajesRestantes.filter(personaje => personaje.caracteristicas.includes(caracteristica));
    } else {
      personajesRestantes = personajesRestantes.filter(personaje => !personaje.caracteristicas.includes(caracteristica));
    }
  }
} if ( respuesta == 'hombre' && nacionalidad == 'americano' && preguntaActual === 1) {
  if (respuesta === "si") {
    personajesRestantes = personajesRestantes.filter(personaje => !personaje.caracteristicas.includes("americano")&&!personaje.caracteristicas.includes("mundial")&&!personaje.caracteristicas.includes("regateador"));
  } else {
    personajesRestantes = personajesRestantes.filter(personaje => !personaje.caracteristicas.includes("europeo")&&!personaje.caracteristicas.includes("humorista")&&!personaje.caracteristicas.includes("maximo_goleador"));
  }
 

} else if (respuesta == 'hombre' && nacionalidad == 'americano' && posicion3=='mundial'&& preguntaActual === 2) {
  if (respuesta === "si") {
    personajesRestantes = personajesRestantes.filter(personaje => personaje.caracteristicas.includes("mundial"));
  } else {
    personajesRestantes = personajesRestantes.filter(personaje => !personaje.caracteristicas.includes("regateador"));
  }
}else if (respuesta == 'hombre' && nacionalidad == 'europeo' && preguntaActual === 1) {
    if (respuesta === "si") {
      personajesRestantes = personajesRestantes.filter(personaje => personaje.caracteristicas.includes("humorista"));
    } else {
      personajesRestantes = personajesRestantes.filter(personaje => !personaje.caracteristicas.includes("maximo_goleador"));
    }
} else if ( respuesta == 'mujer' && preguntaActual === 2) {
  if (respuesta === "si") {
    personajesRestantes = personajesRestantes.filter(personaje => !personaje.caracteristicas.includes("liga_española")&&!personaje.caracteristicas.includes("mundial")&&!personaje.caracteristicas.includes("mejor_mundial")&&!personaje.caracteristicas.includes("pikito")&&!personaje.caracteristicas.includes("balon_de_oro"));
  } else {
    personajesRestantes = personajesRestantes.filter(personaje => !personaje.caracteristicas.includes("liga_francesa"));
  }
} else if (respuesta == 'mujer' && preguntaActual === 3) {
  if (respuesta === "si") {
    personajesRestantes = personajesRestantes.filter(personaje => !personaje.caracteristicas.includes("mundial")&&!personaje.caracteristicas.includes("mejor_mundial")&&!personaje.caracteristicas.includes("balon_de_oro"));
  } else {
    personajesRestantes = personajesRestantes.filter(personaje => !personaje.caracteristicas.includes("pikito"));
  }
}else if (respuesta == 'mujer' && preguntaActual === 3) {
  if (respuesta === "si") {
    personajesRestantes = personajesRestantes.filter(personaje => !personaje.caracteristicas.includes("mejor_mundial"));
  } else {
    personajesRestantes = personajesRestantes.filter(personaje => !personaje.caracteristicas.includes("balon_de_oro"));
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
  document.getElementById('tabla').style.display = 'none';
  document.getElementById('imagenes').style.display = 'none';
  document.getElementById('personaje-nombre').style.display = 'none';
  document.getElementById('empezar').style.display = 'block';
  document.getElementById('intro').style.display = 'block';
  document.getElementById('volver').style.display = 'none';
  preguntaActual = 0;
  generoElegido = "";
  personajesRestantes = [...personajes];
}
