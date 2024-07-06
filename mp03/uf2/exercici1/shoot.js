import { resultsDisplay } from "./app.js";
import {alienInvaders, GO} from "./aliens.js";
import { squares } from "./app.js";
export let aliensRemoved = []
export let currentShooterIndex = 202 /*final 210-224*/
let results = 0
export let width = 15


export function moveShooter(e) {
  switch(GO){
    case false:
  squares[currentShooterIndex].classList.remove('shooter')
  switch(e.key) {
    case 'ArrowLeft':
      if (currentShooterIndex % width !== 0) currentShooterIndex -=1
      break
    case 'ArrowRight' :
      if (currentShooterIndex % width < width -1) currentShooterIndex +=1
      break;
  break;
  }
  squares[currentShooterIndex].classList.add('shooter')
}
}


export function shoot(e) {
    let laserId
    let currentLaserIndex = currentShooterIndex
    function moveLaser() {
      squares[currentLaserIndex].classList.remove('laser')
      currentLaserIndex -= width
      squares[currentLaserIndex].classList.add('laser')
  
      if (squares[currentLaserIndex].classList.contains('invader')) {
        squares[currentLaserIndex].classList.remove('laser')
        squares[currentLaserIndex].classList.remove('invader')
        squares[currentLaserIndex].classList.add('boom')
  
        setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 300)
        clearInterval(laserId)
  
        const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
        aliensRemoved.push(alienRemoved)
        results++
        resultsDisplay.innerHTML = results
        document.getElementById("obj").innerHTML="Objetivo fallido";
        console.log(aliensRemoved)
  
      }for(let y = 0;y<=14;y++){ //si el laser arriba adalt de tot, s'elimina
        if(squares[y].classList.contains('laser')){
          squares[y].classList.remove('laser');
          clearInterval(laserId);
        }
    }
    }
  
    switch(GO){
      case false:
      switch(e.key) {
        case 'ArrowUp':
          laserId = setInterval(moveLaser, 100)
          break;
      }
    }
  }
  

  document.addEventListener('keydown', moveShooter)