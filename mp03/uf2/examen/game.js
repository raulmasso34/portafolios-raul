import { updateBoard } from "./board.js"; // Importa la función para actualizar el tablero desde board.js

const chess = new Chess(); // Crea una instancia del juego de ajedrez utilizando la librería chess.js

// Función para iniciar el juego con una posición personalizada
export function startGame(fenString) {
    // Carga la posición inicial del juego utilizando la notación FEN proporcionada
    chess.load(fenString);
    // Actualiza el tablero con la posición inicial cargada
    updateBoard(chess.fen());
}

// Función para realizar un movimiento en el juego
export function makeMove(from, to) {
    // Intenta realizar el movimiento desde 'from' a 'to'
    const move = chess.move({ from, to, promotion: 'q' }); // 'promotion: 'q'' promociona a reina por defecto
    // Verifica si el movimiento es legal
    if (move === null) {
        return false; // Devuelve false si el movimiento es ilegal
    }
    // Si el movimiento es legal, actualiza el tablero con la nueva posición
    updateBoard(chess.fen());
    return true; // Devuelve true para indicar que el movimiento se realizó con éxito
}

// Función para retroceder un movimiento en el juego
export function goBack() {
    // Deshace el último movimiento realizado en el juego
    const move = chess.undo();
    // Verifica si el movimiento se pudo deshacer
    if (move === null) {
        return false; // Devuelve false si no se puede deshacer el movimiento (por ejemplo, si no hay movimientos para deshacer)
    }
    // Si se pudo deshacer el movimiento, actualiza el tablero con la nueva posición
    updateBoard(chess.fen());
    return true; // Devuelve true para indicar que se deshizo el movimiento con éxito
}

// Función para reiniciar el juego
export function resetGame() {
    // Reinicia el juego a la posición inicial
    chess.reset();
    // Actualiza el tablero con la posición inicial del juego
    updateBoard('start');
}
