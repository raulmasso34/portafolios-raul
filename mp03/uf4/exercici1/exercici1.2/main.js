class Jugador {
  constructor(nom, edat, posicio, partits, accion) {
    this.nom = nom;
    this.edat = edat;
    this.posicio = posicio;
    this.partits = partits;
    this.accion = accion; // Nuevo atributo para el número de goles, goles encajados o intercepciones
  }

  toString() {
    return `${this.nom}, ${this.edat} años, posición: ${this.posicio}, partits: ${this.partits}, accion: ${this.accion}`;
  }

  static calcularPromedioAccionPorPartido(jugadores) {
    const totalAccion = jugadores.reduce((acc, jugador) => acc + jugador.accion, 0);
    const totalPartits = jugadores.reduce((acc, jugador) => acc + jugador.partits, 0);
    return totalAccion / totalPartits;
  }

  static mostrarInformacionEnTabla(jugadores) {
    const statsBody = document.getElementById('statsBody');
    statsBody.innerHTML = ''; // Limpiamos la tabla antes de agregar nueva información

    jugadores.forEach(jugador => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${jugador.nom}</td>
        <td>${jugador.edat}</td>
        <td>${jugador.posicio}</td>
        <td>${jugador.accion}</td>
        <td>${jugador.partits}</td>
      `;
      statsBody.appendChild(row);
    });
  }
}

class Porter extends Jugador {
  constructor(nom, edat, gols_encaixats, partits) {
    super(nom, edat, "Porter", partits, gols_encaixats);
  }

  toString() {
    return super.toString() + `, goles encajados: ${this.accion}`;
  }
}

class Defensa extends Jugador {
  constructor(nom, edat, interceptacions, partits) {
    super(nom, edat, "Defensa", partits, interceptacions);
  }

  toString() {
    return super.toString() + `, interceptaciones: ${this.accion}`;
  }
}

class Migcampista extends Jugador {
  constructor(nom, edat, gols, partits) {
    super(nom, edat, "Migcampista", partits, gols);
  }

  toString() {
    return super.toString() + `, goles: ${this.accion}`;
  }
}

class Davanter extends Jugador {
  constructor(nom, edat, gols, partits) {
    super(nom, edat, "Davanter", partits, gols);
  }

  toString() {
    return super.toString() + `, goles: ${this.accion}`;
  }
}

// Crear algunos jugadores
const jugador1 = new Porter("Marc", 28, 15, 50);
const jugador2 = new Defensa("Carla", 25, 30, 50);
const jugador3 = new Migcampista("David", 29, 10, 50);
const jugador4 = new Davanter("Laura", 24, 20, 50);

// Agregar los jugadores a un arreglo
const equipo = [jugador1, jugador2, jugador3, jugador4];

// Mostrar información en la tabla
Jugador.mostrarInformacionEnTabla(equipo);

// Calcular estadísticas del equipo
const promedioAccionPorPartido = Jugador.calcularPromedioAccionPorPartido(equipo);

// Mostrar promedio de acción por partido
const promedioAccionDiv = document.getElementById('promedio');
promedioAccionDiv.textContent = `Promedio de acción por partido: ${promedioAccionPorPartido.toFixed(2)}`;
