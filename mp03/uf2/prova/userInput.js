export function moveralrey(from,to){
    // Intenta realizar el movimiento desde 'from' a 'to'
    const move = chess.move({from, to, promotion: 'r' }); // 'promotion: 'q'' promociona a reina por defecto
    // Verifica si el movimiento es legal
    if (move === null) {
        return false; // Devuelve false si el movimiento es ilegal
    }
    // Si el movimiento es legal, actualiza el tablero con la nueva posición
    updateBoard(chess.fen());
    return true; // Devuelve true para indicar que el movimiento se realizó con éxito
}
