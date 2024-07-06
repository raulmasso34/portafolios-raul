// index.js
import { board, initBoard } from "./board.js";
import { makeMove, startGame } from "./game.js";

document.addEventListener('DOMContentLoaded', () => {
    // El FEN corresponent a la imatge proporcionada en l'exercici
    // S'ha fet aquest FEN utilitzant la url: https://www.dailychess.com/chess/chess-fen-viewer.php
    const startPosition = "r3kb1r/1p1b1p2/p2np3/3P1p2/1qP2PBp/PN1Q4/3N2PP/R4R1K w - - 0 1";

    initBoard(startPosition);

    document.getElementById('moveBtn').addEventListener('click', () => {
        const moveInput = document.getElementById('moveInput').value;
        let [from, to] = moveInput.split('-');
        if(!makeMove(from.trim(), to.trim()))
        {
            alert("Moviment invàlid");
        }
        else{
            board.move(moveInput);
        }
    });

    // Aquesta línia inicialitzarà el joc amb la posició específica
    startGame(startPosition);
});
