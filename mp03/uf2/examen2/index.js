let board = null;
let game = new Chess;
const fenInicial = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";


let boardConfig = {
   draggable: true,
   position: fenInicial,
   sparePieces: false,
   onDrop:
  
   function(source,target, piece, newPos, oldPos, orientation) {
       let move = game.move ({
           from: source,
           to: target,
       })
       console.log("Source: " + source)
       console.log("Target: " + target)
       console.log("Piece: " + piece)
       console.log("New Pos: " + Chessboard.objToFen(newPos))
       console.log("old Pos: " + Chessboard.objToFen(oldPos))
       console.log("Orientation: " + orientation)
       console.log("============================================================")
       if(move===null){
        return 'snapback';
    }
   }
}
document.addEventListener("DOMContentLoaded", ()=> {
   board = Chessboard('board', boardConfig)
});




///////////////////////////////////////////LISTAS/////////////////////////////////////////////////////////////




  // Lista de movimientos famosos de ajedrez (en formato FEN)
  const movimientosFamosos = [
      "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR", // Gambito de Rey: Defensa Siciliana
      "rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR",
      "rnbqkbnr/p1pppppp/1p6/8/8/1P6/P1PPPPPP/RNBQKBNR",// Gambito de Rey: Ataque Panov-Botvinnik
      "r3kb1r/1p1b1p2/p2np3/3P1p2/1nP2PBp/PN1Q4/3N2PP/R4R1K",
      "r1bkq2r/ppp3pp/2npqn2/b3pp2/4P3/P1NP2P1/1PPB1P1P/PKR1QBNR",
      "r1bkq2r/ppp3pp/2npqn2/b3pp2/4P3/P1NP2P1/1PPB1P1P/PKRpQBNR",
      "r1bkq2r/ppp3pp/2npqn2/b3pp2/4P3/P1NP2P1/1PPB1P1P/PKRqQBNR",
  ];

//document.documentElement("Movimiento").innerHTML= movimientosFamosos;


  // Índice del movimiento actual en la lista de movimientos
  let indiceMovimientoActual = 0;






  // Función para avanzar al siguiente movimiento
  function siguienteMovimiento() {
      if (indiceMovimientoActual < movimientosFamosos.length -1) {
          // Obtener el siguiente movimiento de la lista y actualizar el tablero
          indiceMovimientoActual++;
          const fen = movimientosFamosos[indiceMovimientoActual];
          document.getElementById("Movimientosiguiente").innerHTML += '<br>' +fen;
          console.log('Siguiente Movimiento:');
          console.log(fen);
          //generarTablero(fen);
           board.position(fen)
      } else {
          alert('¡La jugada ha finalizado!');
      }
  }




  // Función para retroceder al movimiento anterior
  function movimientoAnterior() {
      if (indiceMovimientoActual > 0) {
          // Obtener el movimiento anterior de la lista y actualizar el tablero
          indiceMovimientoActual--;
          const fen = movimientosFamosos[indiceMovimientoActual];
          document.getElementById("Movimientosanterior").innerHTML += '<br>' +fen;
          console.log('Movimiento Anterior:');
          console.log(fen);
          //generarTablero(fen);
          board.position(fen)
      } else {
          alert('¡Ya estás en el primer movimiento!');
      }
  }


  



  // Event listener para el botón de siguiente movimiento
  document.getElementById('nextMoveBtn').addEventListener('click', (movimientosFamosos) => {
   //board.position(movimientosFamosos)
   //Tambien funciona con
       //board.position(siguienteMovimiento(movimientosFamosos));
   siguienteMovimiento(movimientosFamosos)
});




  // Event listener para el botón de movimiento anterior
  document.getElementById('prevMoveBtn').addEventListener('click', () => {
   board.position(movimientoAnterior(movimientosFamosos))
  });
