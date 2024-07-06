// board.js
export let board = null;

export function updateBoard(position) {
    board.position(position);
}
export function initBoard(startPosition) {
    const config = {
        draggable: false,
        dropOffBoard: 'trash',
        sparePieces: false,
        position: startPosition
    };
    board = Chessboard('myBoard', config);
}
