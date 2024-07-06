//IMPORTACIÓN
// En este apartado hemos importado diferentes funciones de los archivos "aliens.js" y "shooter.js"
import {moveInvaders, draw} from './aliens.js';
import {currentShooterIndex,moveShooter, shoot} from "./shoot.js";


const grid = document.querySelector('.grid')
// Exportamos la función que muestra el resultado de las diferentes funciones
export const resultsDisplay = document.querySelector('.results')
let height = 0
let invadersId;



for (let i = 0; i < 225; i++) {
 const square = document.createElement('div')
 grid.appendChild(square)
}


//Exportamos la constante "squares" donde se alamacena cada posicion del cuadro donde se moveran los "aliens"
export const squares = Array.from(document.querySelectorAll('.grid div'))




//llamamos a la función "draw"
draw()


// llamamos a diferentes funciones
squares[currentShooterIndex].classList.add('shooter')

invadersId = setInterval(moveInvaders, 600)


document.addEventListener('keydown', shoot)


document.addEventListener('keydown', moveShooter)