// Importación de funciones y objetos desde otros archivos
import { board, initBoard } from "./board.js"; // Importa el tablero y la función de inicialización del tablero
import { makeMove, startGame } from "./game.js"; // Importa las funciones para realizar movimientos y comenzar el juego
import { moveBack, moveForward, addMove, paintMovement } from "./history.js"; // Importa las funciones relacionadas con el historial de movimientos

// Variables globales exportadas
export let moveCounter = 1; // Variable para llevar la cuenta del número de movimientos realizados
export let markedMove = 0; // Variable para marcar el movimiento actual en el historial

// Evento que se dispara cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Posición de inicio del juego en formato FEN
    const startPosition = "r3kb1r/1p1b1p2/p2np3/3P1p2/1qP2PBp/PN1Q4/3N2PP/R4R1K w - - 0 1";

    // Inicializa el tablero con la posición de inicio
    initBoard(startPosition);

    // Agrega un manejador de eventos al botón de movimiento
    document.getElementById('moveBtn').addEventListener('click', () => {
        // Obtiene el valor del input de movimiento
        const moveInput = document.getElementById('moveInput').value;
        // Divide el movimiento en posición de origen y destino
        let [from, to] = moveInput.split('-');
        // Intenta realizar el movimiento
        if (!makeMove(from.trim(), to.trim())) {
            // Si el movimiento no es válido, muestra una alerta
            alert("Moviment invàlid");
        } else {
            // Si el movimiento es válido:
            // Mueve la pieza en el tablero visual
            board.move(moveInput);
            // Agrega el movimiento al historial
            addMove(moveInput);
            // Marca el movimiento actual
            markedMove = moveCounter;
            // Actualiza la visualización de los movimientos marcados
            paintMovement(markedMove);
            // Incrementa el contador de movimientos
            moveCounter++;
        }
    });

    // Agrega un manejador de eventos al botón de retroceso
    document.getElementById('moveBack').addEventListener('click', () => {
        // Retrocede en el historial de movimientos si es posible
        if (moveBack(markedMove)) {
            // Decrementa el marcador de movimiento
            markedMove--;
            // Actualiza la visualización de los movimientos marcados
            paintMovement(markedMove);
        }
    });

    // Agrega un manejador de eventos al botón de avance
    document.getElementById('moveForward').addEventListener('click', () => {
        // Avanza en el historial de movimientos si es posible
        if (moveForward(markedMove)) {
            // Incrementa el marcador de movimiento
            markedMove++;
            // Actualiza la visualización de los movimientos marcados
            paintMovement(markedMove);
        }
    });

    // Inicializa el juego con la posición de inicio
    startGame(startPosition);
});