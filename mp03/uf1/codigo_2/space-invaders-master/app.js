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
let alienShootTimeout;
// ... (código anterior)

function restartGame() {
  // Restablecer variables y estados
  currentShooterIndex = 202;
  direction = 1;
  goingRight = true;
  aliensRemoved = [];
  results = 0;
  alienLasers = [];
  alienShootTimeout = null;

  // Limpiar el grid y dibujar el nuevo juego
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.remove('shooter', 'invader', 'laser', 'boom', 'alien-laser');
  }
  draw();
}



// ... (resto del código)

for (let i = 0; i < 225; i++) {
  const square = document.createElement('div');
  grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll('.grid div'));

const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39
];
const alienInvadersState = Array(alienInvaders.length).fill(true);

function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!aliensRemoved.includes(i) && alienInvadersState[i]) {
      squares[alienInvaders[i]].classList.add('invader');
    }
  }
}

draw();

function remove() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove('invader');
  }
}

squares[currentShooterIndex].classList.add('shooter');

function moveShooter(e) {
  squares[currentShooterIndex].classList.remove('shooter');
  switch (e.key) {
    case 'ArrowLeft':
      if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
      break;
    case 'ArrowRight':
      if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
      break;
  }
  squares[currentShooterIndex].classList.add('shooter');
}
document.addEventListener('keydown', moveShooter);

function moveInvaders() {
  const leftEdge = alienInvaders[0] % width === 0;
  const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;
  remove();

  if (rightEdge && goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width + 1;
      direction = -1;
      goingRight = false;
    }
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    if (!aliensRemoved.includes(i) && alienInvadersState[i]) {
      // Ajusta la probabilidad de disparo según tus necesidades
      if (Math.random() > 0.95) {
        if (!alienLasers[i]) {
          alienShootTimeout = setTimeout(() => alienShoot(i), 100);
        }
      }
      
    }
  }

  if (leftEdge && !goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width - 1;
      direction = 1;
      goingRight = true;
    }
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direction;
  }

  if (Math.random() > 0.9) {
    const randomInvaderIndex = Math.floor(Math.random() * alienInvaders.length);
    alienShoot(randomInvaderIndex);
  }

  draw();

  if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
    alert('GAME OVER');
    clearInterval(invadersId);
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    if (alienInvaders[i] > squares.length) {
      alert('GAME OVER');
      clearInterval(invadersId);
    }
  }

  if (aliensRemoved.length === alienInvaders.length) {
    alert('YOU WIN');
    clearInterval(invadersId);
  }
}
invadersId = setInterval(moveInvaders, 600);

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

      // Detener y limpiar el intervalo del láser alienígena
      clearInterval(alienLasers[alienRemoved]);
      alienLasers[alienRemoved] = null;
    }
  }

  switch (e.key) {
    case 'ArrowUp':
      laserId = setInterval(moveLaser, 100);
      break;
  }
}

const alienLaserSpeed = 200;

function alienShoot(invaderIndex) {
  if (alienInvadersState[invaderIndex]) {
    let alienLaserIndex = alienInvaders[invaderIndex];

    function moveAlienLaser() {
      console.log("Movimiento de la bala alienígena");
      if (alienInvadersState[invaderIndex]) {
        squares[alienLaserIndex].classList.remove('alien-laser');

        // Verificar si la bala ha alcanzado el borde inferior de la pantalla
        if (alienLaserIndex + width < squares.length) {
          alienLaserIndex += width;

          // Eliminar clases innecesarias antes de agregar una nueva
          squares[alienLaserIndex - width].classList.remove('alien-laser');

          // Verificar colisión con el jugador
          if (squares[alienLaserIndex].classList.contains('shooter')) {
            alert('GAME OVER');
            clearInterval(invadersId);
            clearInterval(alienLasers[invaderIndex]);
            return;
          }

          squares[alienLaserIndex].classList.add('alien-laser');
        } else {
          clearInterval(alienLasers[invaderIndex]);
          squares[alienLaserIndex - width].classList.remove('alien-laser'); // Limpiar el cuadrado del láser al finalizar el movimiento
          return;
        }
      }
    }

    // Inicia el intervalo para el disparo del alien
    alienLasers[invaderIndex] = setInterval(moveAlienLaser, alienLaserSpeed);
  }
}

document.addEventListener('keydown', shoot);
