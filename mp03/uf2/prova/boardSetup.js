export let board = null;
let game = new Chess("8/8/8/8/4K3/8/8/r3k2r w - - 0 1");
const inicio = "8/8/8/8/4K3/8/8/r3k2r w - - 0 1";

export function updateBoard(position) {
    board.position(position); // Actualiza la posición del tablero utilizando la librería Chessboard.js
}
function onDragStart (source, piece, position, orientation) {
    // do not pick up pieces if the game is over
    if (game.game_over()) return false
  
    // only pick up pieces for White
    if (piece.search(/^b/) !== -1) return false
  }
  
  function makeRandomMove () {
   let possibleMoves = game.moves()
  
    // game over
    if (possibleMoves.length === 0) return
  
    let randomIdx = Math.floor(Math.random() * possibleMoves.length)
    game.move(possibleMoves[randomIdx])
    board.position(game.fen())
  }
  
  function onDrop (source, target) {
    // see if the move is legal
    var move = game.move({
      from: source,
      to: target,
      promotion: 'r' // NOTE: always promote to a queen for example simplicity
    })
  
    // illegal move
    if (move === null) return 'snapback'
  
    // make random legal move for black
    window.setTimeout(makeRandomMove, 250)
  }
  
  // update the board position after the piece snap
  // for castling, en passant, pawn promotion
  function onSnapEnd () {
    board.position(game.fen())
  }
  
  let boardConfig = {
    draggable: true,
    position: inicio,
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd
  }
document.addEventListener("DOMContentLoaded", ()=> {
board = Chessboard('board', boardConfig)
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*function onDragStart (source, piece, position, orientation) {
    // do not pick up pieces if the game is over
    if (game.game_over()) return false
  
    // only pick up pieces for White
    if (piece.search(/^b/) !== -1) return false
  }
  
  function makeRandomMove () {
   let possibleMoves = game.moves()
  
    // game over
    if (possibleMoves.length === 0) return
  
    let randomIdx = Math.floor(Math.random() * possibleMoves.length)
    game.move(possibleMoves[randomIdx])
    board.position(game.fen())
  }
  
  function onDrop (source, target) {
    // see if the move is legal
    var move = game.move({
      from: source,
      to: target,
      promotion: 'q' // NOTE: always promote to a queen for example simplicity
    })
  
    // illegal move
    if (move === null) return 'snapback'
  
    // make random legal move for black
    window.setTimeout(makeRandomMove, 250)
  }
  
  // update the board position after the piece snap
  // for castling, en passant, pawn promotion
  function onSnapEnd () {
    board.position(game.fen())
  }
  
  let boardConfig = {
    draggable: true,
    position: inicio,
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd
  }

  
document.addEventListener("DOMContentLoaded", ()=> {
board = Chessboard('board', boardConfig)
});*/