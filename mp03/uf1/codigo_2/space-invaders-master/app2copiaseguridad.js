const grid = document.querySelector('.grid');
const resultsDisplay = document.querySelector('.results');
let currentShooterIndex = 202;
let width = 15;
let direction = 1;
let invadersId;
let goingRight = true;
let aliensRemoved = [];
let results = 0;
let alienLasers = [];



for (let i = 0; i < 225; i++) {
  const square = document.createElement('div')
  grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const alienInvaders = [
  0,1,2,3,4,5,6,7,8,9,
  15,16,17,18,19,20,21,22,23,24,
  30,31,32,33,34,35,36,37,38,39
]
const alienInvadersState = Array(alienInvaders.length).fill(true);
function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if(!aliensRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add('invader')
    }
  }
}

draw()

function remove() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove('invader')
  }
}

squares[currentShooterIndex].classList.add('shooter')


function moveShooter(e) {
  squares[currentShooterIndex].classList.remove('shooter')
  switch(e.key) {
    case 'ArrowLeft':
      if (currentShooterIndex % width !== 0) currentShooterIndex -=1
      break
    case 'ArrowRight' :
      if (currentShooterIndex % width < width -1) currentShooterIndex +=1
      break
  }
  squares[currentShooterIndex].classList.add('shooter')
}
document.addEventListener('keydown', moveShooter)

function moveInvaders() {
  const leftEdge = alienInvaders[0] % width === 0
  const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1
  remove()

  if (rightEdge && goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width +1
      direction = -1
      goingRight = false
    }
  }
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!aliensRemoved.includes(i) && Math.random() > 0.95) {
      if (!alienLasers[i] ) { // Verificar si ya hay un láser en esta posición
        alienShootTimeout = setTimeout(() => alienShoot(i), 100);   
        alienShootTimeout = setTimeout(() => alienShoot(i), 10000);
      }
    }
  }

  if(leftEdge && !goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width -1
      direction = 1
      goingRight = true
    }
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direction
  }
if (Math.random() > 0.9) {
    const randomInvaderIndex = Math.floor(Math.random() * alienInvaders.length);
    alienShoot(randomInvaderIndex);
}
  draw();

  if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
    alert('GAME OVER');
    clearInterval(invadersId)
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    if(alienInvaders[i] > (squares.length)) {
      alert('GAME OVER');
      clearInterval(invadersId)
    }
  }
  if (aliensRemoved.length === alienInvaders.length) {
    alert('YOU WIN');
    clearInterval(invadersId)
  }
}
invadersId = setInterval(moveInvaders, 600)

function shoot(e) {
  let laserId;
  let currentLaserIndex = currentShooterIndex;

  function moveLaser() {
    squares[currentLaserIndex].classList.remove('laser');
    currentLaserIndex -= width;

    if (currentLaserIndex < 0) {
      clearInterval(laserId);
      return;
    }

    squares[currentLaserIndex].classList.add('laser');

    if (squares[currentLaserIndex].classList.contains('invader')) {
      squares[currentLaserIndex].classList.remove('laser');
      squares[currentLaserIndex].classList.remove('invader');
      squares[currentLaserIndex].classList.add('boom');
      alienInvadersState[currentLaserIndex] = false;

      setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 300);
      clearInterval(laserId);

      const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
      aliensRemoved.push(alienRemoved);
      results++;
      resultsDisplay.innerHTML = results;
      console.log(aliensRemoved);
    }
  }

  switch (e.key) {
    case 'ArrowUp':
      laserId = setInterval(moveLaser, 100);
      break;
  }
}

const alienLaserSpeed = 200


function alienShoot(invaderIndex) {
  if (alienInvadersState[invaderIndex]) {
    let alienLaserInde = 0;
    let alienLaserIndex = alienInvaders[invaderIndex];

    function moveAlienLaser() {
      if (alienInvadersState[invaderIndex]) {
        if(alienLaserIndex<225){
          squares[alienLaserIndex].classList.remove('alien-laser');
          alienLaserIndex += width;
  
//          if (alienLaserIndex >= squares.length) {
//            clearInterval(alienLasers[invaderIndex]);
//            alienLasers[invaderIndex] = null;
            //squares[alienLaserIndex - width].classList.remove('alien-laser'); // Limpiar el cuadrado del láser al finalizar el movimiento
             }     else {
            squares[alienLaserIndex].classList.add('alien-laser');
  
            if (squares[alienLaserIndex].classList.contains('shooter')) {
              alert('GAME OVER');
              clearInterval(invadersId);
            }
          
          }
        
        }
      }
    }

    // Inicia el intervalo para el disparo del alien
    alienLasers[invaderIndex] = setInterval(moveAlienLaser, alienLaserSpeed);
}


 document.addEventListener('keydown', shoot);
 
 
 




 function moveLaser() {
    squares[currentLaserIndex].classList.remove('laser');
    currentLaserIndex -= width;
  
    if (currentLaserIndex < 0) {
      clearInterval(laserId);
      return;
    }
  
    squares[currentLaserIndex].classList.add('laser');
  
    if (squares[currentLaserIndex].classList.contains('invader')) {
      squares[currentLaserIndex].classList.remove('laser');
      squares[currentLaserIndex].classList.remove('invader');
      squares[currentLaserIndex].classList.add('boom');
      alienInvadersState[currentLaserIndex] = false;
  
      setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 300);
      clearInterval(laserId);
  
      const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
      aliensRemoved.push(alienRemoved);
      results++;
      resultsDisplay.innerHTML = results;
      console.log(aliensRemoved);
  
      // Detener y limpiar el intervalo del láser alienígena
      clearInterval(alienLasers[alienRemoved]);
      alienLasers[alienRemoved] = null;
    }
  }
  
  function moveAlienLaser() {
    if (alienInvadersState[invaderIndex]) {
      squares[alienLaserIndex].classList.remove('alien-laser');
  
      // Verificar si el nuevo índice está dentro del rango válido
      if (alienLaserIndex + width < 225) {
        alienLaserIndex += width;
        squares[alienLaserIndex].classList.add('alien-laser');
      } else {
        clearInterval(alienLasers[invaderIndex]);
        squares[alienLaserIndex].classList.remove('alien-laser'); // Limpiar el cuadrado del láser al finalizar el movimiento
        return;
      }
    }
  
    if (squares[alienLaserIndex].classList.contains('shooter')) {
      alert('GAME OVER');
      clearInterval(invadersId);
      clearInterval(alienLasers[invaderIndex]);
    }
  }
  