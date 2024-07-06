// game.js
import { updateBoard } from "./board.js";

const chess = new Chess();

// Aquesta funció està adaptada per iniciar el joc amb una posició personalitzada.
export function startGame(fenString) {
    chess.load(fenString);
    updateBoard(chess.fen());
}

export function makeMove(from, to) {
    const move = chess.move({ from, to, promotion: 'q' }); // Promociona a reina per defecte
    if (move === null) {
        return false; // El moviment era il·legal
    }
    updateBoard(chess.fen());
    return true;
}

export function resetGame() {
    chess.reset();
    updateBoard('start');
}

