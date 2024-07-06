import {currentShooterIndex, aliensRemoved} from "./shoot.js";
import { resultsDisplay } from "./app.js";
import { squares } from "./app.js";
//export let aliensRemoved= [];
export let invadersId;  
//export let remove
export let GO = false;
export let width = 15;
export const grid = document.querySelector('.grid');
export let results = 0;
export let alienInvaders = [
  0,1,2,3,4,5,6,7,8,9,
  15,16,17,18,19,20,21,22,23,24,
  30,31,32,33,34,35,36,37,38,39
];
let direction = 1;
let goingRight = true

let end = false;


export function moveInvaders() {
  let currentLaser2Index;


  if(GO){
    window.alert("Game Over");
    location.href="index.html";
  }
  const leftEdge = alienInvaders[0] % width === 0
  const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1
  remove()

  if (rightEdge && goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width +1
      direction = -1
      goingRight = false
      if(alienInvaders[i]>=200){ //si els aliens arriban fins abaix el jugador perd
          GO = true;
          resultsDisplay.innerHTML = "Game Over"
          window.alert("Game Over");
          location.href="index.html";
          setTimeout(()=> squares[currentLaser2Index].classList.remove('boom'), 300)
          clearInterval(laser2Id)

      }    
    }
  }

  if(leftEdge && !goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width -1
      direction = 1
      goingRight = true
      if(alienInvaders[i]>=200){
        GO = true;
        resultsDisplay.innerHTML = "Game Over"
        window.alert("Game Over");
        location.href="index.html";
        setTimeout(()=> squares[currentLaser2Index].classList.remove('boom'), 300)
        clearInterval(laser2Id)
        
      }

    }
  }


  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direction
  }

  draw();

  if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
    resultsDisplay.innerHTML = 'GAME OVER'
    clearInterval(invadersId)
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    if(alienInvaders[i] > (squares.length)) {
      resultsDisplay.innerHTML = 'GAME OVER'
      clearInterval(invadersId)
    }
  }
  if (aliensRemoved.length === alienInvaders.length) {
    resultsDisplay.innerHTML = 'WHY'
    clearInterval(invadersId)
    end = true;
  }
  shoot2();
}


export function remove() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove('invader')
  }
}

function shoot2() {
  
let laser2Id
let quiDispara= parseInt(Math.random()*29);
let currentLaser2Index = alienInvaders [quiDispara];

  

  if(squares[currentLaser2Index].classList.contains('invader')){ //Ens asegurem de que no dispari un invader eliminat
    
    function moveLaser2() {
      squares[currentLaser2Index].classList.remove('laser2')
      currentLaser2Index += width
      squares[currentLaser2Index].classList.add('laser2')
  
      if (squares[currentLaser2Index].classList.contains('shooter')) {
        squares[currentLaser2Index].classList.remove('laser2')
        squares[currentLaser2Index].classList.remove('shooter')
        squares[currentLaser2Index].classList.add('boom')
        GO = true;
        resultsDisplay.innerHTML = "Game Over"
        setTimeout(()=> squares[currentLaser2Index].classList.remove('boom'), 300)
        clearInterval(laser2Id)
  
      }for(let y = 210;y<225;y++){ //si el laser arriba abaix de tot, s'elimina
        if(squares[y].classList.contains('laser2')){
          squares[y].classList.remove('laser2');
          clearInterval(laser2Id);
        }
      }
  
    }
        laser2Id = setInterval(moveLaser2, 100)  }
      
        else{if (!end) {
          shoot2();
        }  } //Tornem a cridar a la funció en cas de que no hi hagi un invader desde la posició que ha tocat disparar
}


export function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if(!aliensRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add('invader')
    }
  }
}