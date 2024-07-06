
document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1

  const winningArrays = [
    // HORIZONTAL
    [0, 1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
  
    [8, 9, 10, 11,12],
    [9,10,11 ,12 ,13],
    [10, 11, 12, 13, 14],
    [11, 12, 13, 14, 15],
  
    [16, 17, 18 ,19 ,20],
    [17, 18, 19, 20, 21],
    [18, 19, 20, 21, 22],
    [19, 20, 22, 22, 23],
  
    [24 ,25 ,26 ,27,28],
    [25 ,26 ,27 ,28,29],
    [26 ,27 ,28 ,29,30],
    [27 ,28 ,29 ,30,31],
  
    [32,33 ,34 ,35 ,36],
    [33,34 ,35 ,36 ,37],
    [34,35 ,36 ,37 ,38],
    [35,36 ,37 ,38 ,39],
  
    [40,41 ,42 ,43 ,44],
    [41,42 ,43 ,44 ,45],
    [42,43 ,44 ,45 ,46],
    [43,44,45 ,46 ,47],
  
    [48,49 ,50 ,51 ,52],
    [49,50 ,51 ,52 ,53],
    [50,51 ,52 ,53 ,54],
    [51,52 ,53 ,54 ,55],
   
   // VERTICAL
  
  
   [0,8 ,16 ,24 ,32],
   [8 ,16 ,24 ,32,40],
   [16,24 ,32 ,40 ,48],
   
  
   [1,9 ,17 ,25 ,33],
   [9,17 ,25 ,33 ,41],
   [17,25 ,33 ,41 ,49],
   
  
   [2,10 ,18 ,26 ,34],
   [10,18 ,26 ,34 ,42],
   [18,26 ,34 ,42 ,50],
  
   [3,11 ,19 ,27 ,35],
   [11,19 ,27 ,35 ,43],
   [19,27 ,35 ,43 ,51],
  
  
   [4,12 ,20 ,28 ,36],
   [12,20 ,28 ,36 ,44],
   [20,28,36 ,44 ,52],
  
  
  [5,13 ,21 ,29 ,37],
   [13,21 ,29 ,37 ,45],
   [21,29 ,37 ,45 ,53],
  
   
   [6,14 ,22 ,30 ,38],
   [14,22 ,30 ,38 ,46],
   [22,30 ,38 ,46 ,54],
  
  
   [7,15 ,23 ,31 ,39],
   [15,23 ,31 ,39 ,47],
   [23,31 ,39 ,47 ,55],
  
  
   // DIAGONAL <--
  
  
   [0,9 ,18 ,27 ,36],
   [9,18 ,27 ,36 ,45],
   [18,27 ,36 ,45 ,54],
   
   [1,10 ,19 ,28 ,37],
   [10,19 ,28 ,37 ,46],
   [19,28 ,37 ,46 ,55],
  
   [2,11 ,20 ,29,38],
   [11,20 ,29 ,38 ,47],
   
   
   [3,12 ,21 ,30 ,39],
   
   [8,17,26,35,44],
   [17,26,35,44,53],
  
   [16,25,34,43,52],
   
  
  
  
  
   // DIAGONAL -->
  
  
   [7,14 ,21 ,28 ,35],
   [14,21 ,28 ,35 ,42],
   [21,28 ,35 ,42 ,49],
   
   [6,13 ,20 ,27 ,34],
   [13,20 ,27 ,34 ,41],
   [20,27 ,34 ,41 ,48],
  
   [5,12 ,19,26,33],
   [12,19 ,26 ,33 ,40],
   
   
   [4,11 ,18 ,25 ,32],
  
   [15,22,29,36,43],
   [22,29,36,43,50],
  
   [23,30,37,44,51],
  
  
  ]


  function checkBoard() {
    for (let y = 0; y < winningArrays.length; y++) {
      const square1 = squares[winningArrays[y][0]]
      const square2 = squares[winningArrays[y][1]]
      const square3 = squares[winningArrays[y][2]]
      const square4 = squares[winningArrays[y][3]]
      const square5 = squares[winningArrays[y][4]]

      //check those squares to see if they all have the class of player-one
      if (
        square1.classList.contains('player-one') &&
        square2.classList.contains('player-one') &&
        square3.classList.contains('player-one') &&
        square4.classList.contains('player-one') &&
        square5.classList.contains('player-one')
      )
      {
        alert ('Jugador 1 ha ganado!');
        
      }
      //check those squares to see if they all have the class of player-two
      if (
        square1.classList.contains('player-two') &&
        square2.classList.contains('player-two') &&
        square3.classList.contains('player-two') &&
        square4.classList.contains('player-two') &&
        square5.classList.contains('player-two')
      )
      {
        alert ('El jugador 2 ha ganado!');
        
      }
    }
  }

  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent=(i-1) + 1;
    squares[i].onclick = () => {
      
      //if the square below your current square is taken, you can go ontop of it
      if (squares[i + 8].classList.contains('taken') &&!squares[i].classList.contains('taken')) {
        if (currentPlayer == 1) {
          squares[i].classList.add('taken')
          squares[i].classList.add('player-one')
          currentPlayer = 2
          displayCurrentPlayer.innerHTML = currentPlayer
        } else if (currentPlayer == 2){
          squares[i].classList.add('taken')
          squares[i].classList.add('player-two')
          currentPlayer = 1
          displayCurrentPlayer.innerHTML = currentPlayer        
        } 
      } else alert('no puedes ponerlo aqui')
      checkBoard()
    }
  }
  
})
