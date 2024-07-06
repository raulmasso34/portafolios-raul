import { goBack, makeMove } from "./game.js"; // Importa las funciones goBack y makeMove desde game.js
import { moveCounter } from "./index.js"; // Importa la variable moveCounter desde index.js

// Función para retroceder en el historial de movimientos
export function moveBack(moveCounter) {
    // Verifica si existe un elemento con el id igual a moveCounter
    if ($("#" + (moveCounter)).length) {
        // Si existe, retrocede en el juego utilizando la función goBack importada
        goBack();
        return true; // Indica que se pudo retroceder con éxito
    } else {
        return false; // Indica que no se pudo retroceder
    }
}

// Función para avanzar en el historial de movimientos
export function moveForward(moveCounter) {
    // Calcula el número de movimiento siguiente
    const nextMoveCounter = moveCounter + 1;
    // Obtiene el texto del movimiento siguiente desde el elemento HTML
    const moveInput = $("#r" + nextMoveCounter + " td:nth-child(2)").text();
    // Verifica si se obtuvo un movimiento siguiente válido
    if (moveInput) {
        // Divide el movimiento en posición de origen y destino
        let [from, to] = moveInput.split('-');
        // Intenta realizar el movimiento
        if (makeMove(from.trim(), to.trim())) {
            return true; // Indica que se pudo avanzar con éxito
        }
    }
    return false; // Indica que no se pudo avanzar
}

// Función para agregar un movimiento al historial
export function addMove(movement) {
    const moveInput = document.getElementById("movements"); // Elemento HTML para mostrar los movimientos
    // Agrega una fila al historial con el número de movimiento y el movimiento realizado
    moveInput.innerHTML += "<tr id=r" + moveCounter + "><td>" + moveCounter + "</td><td id=" + moveCounter + ">" + movement + "</td></tr>";
}

// Función para resaltar el movimiento actual en el historial
export function paintMovement(currentMove) {
    $('tr').removeClass("last-move"); // Remueve la clase de resaltado de todas las filas
    $("#r" + currentMove).addClass("last-move"); // Agrega la clase de resaltado a la fila correspondiente al movimiento actual
}
