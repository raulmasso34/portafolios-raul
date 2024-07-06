// Declara una variable global para representar el tablero de ajedrez
export let board = null;

// Función para actualizar el tablero con una nueva posición
export function updateBoard(position) {
    board.position(position); // Actualiza la posición del tablero utilizando la librería Chessboard.js
}

// Función para inicializar el tablero con una posición inicial dada
export function initBoard(startPosition) {
    // Configuración del tablero
    const config = {
        draggable: false, // No permite arrastrar las piezas
        dropOffBoard: 'trash', // Define qué hacer con las piezas arrastradas fuera del tablero
        sparePieces: false, // No permite piezas de repuesto
        position: startPosition // Posición inicial del tablero
    };
    // Crea el tablero utilizando la librería Chessboard.js y la configura según las especificaciones dadas
    board = Chessboard('myBoard', config); // 'myBoard' es el ID del elemento HTML donde se mostrará el tablero
}
