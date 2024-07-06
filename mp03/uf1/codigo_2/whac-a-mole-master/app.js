const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const mole2 = document.querySelector('.mole2');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPositionMole;
let hitPositionMole2;
let currentTime = 60;
let timerId = null;

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole');
  });

  let randomSquare = squares[Math.floor(Math.random() * 25)];
  randomSquare.classList.add('mole');

  hitPositionMole = randomSquare.id;
}

function randomSquare2() {
  squares.forEach(square => {
    square.classList.remove('mole2');
  });

  let randomSquare2 = squares[Math.floor(Math.random() * 25)];

  // Asegúrate de que el nuevo cuadrado para mole2 sea diferente del cuadrado actual de mole
  while (randomSquare2.id === hitPositionMole) {
    randomSquare2 = squares[Math.floor(Math.random() * 25)];
  }

  randomSquare2.classList.add('mole2');

  hitPositionMole2 = randomSquare2.id;
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPositionMole) {
      result++;
      score.textContent = result;
      hitPositionMole = null;
    } else if (square.id == hitPositionMole2) {
      result++;
      score.textContent = result;
      hitPositionMole2 = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 500);
}

function moveMole2() {
  timerId = setInterval(randomSquare2, 500);
}

moveMole();
moveMole2();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert('GAME OVER! Your final score is ' + result);
  }
}

let countDownTimerId = setInterval(countDown, 1000);
