import {  board} from "./boardSetup.js";



let row=null;
let col=null;

let position = col+row;

document.addEventListener("DOMContentLoaded", ()=> {
    const a = document.getElementById("a")
    a.addEventListener('click', () => {
        col = 'a';
        console.log(col);
    })
    const b = document.getElementById("b")
    b.addEventListener('click', () => {
        col = 'b';
        console.log(col)
    })
    const c = document.getElementById("c")
    c.addEventListener('click', () => {
        col = 'c';
        console.log(col)
    })
    const d = document.getElementById("d")
    d.addEventListener('click', () => {
        col = 'd';
        console.log(col)
    })
    const e = document.getElementById("e")
    e.addEventListener('click', () => {
        col = 'e';
        console.log(col)
    })
    const f = document.getElementById("f")
    f.addEventListener('click', () => {
        col = 'f';
        console.log(col)
    })
    const g = document.getElementById("g")
    g.addEventListener('click', () => {
        col = 'g';
        console.log(col)
    })
    const h = document.getElementById("h")
    h.addEventListener('click', () => {
        col = 'h';
        console.log(col)
    })
    const numero1 = document.getElementById("numero1")
    numero1.addEventListener('click', () => {
        row = 1;
        console.log(row)
    })
    const numero2 = document.getElementById("numero2")
    numero2.addEventListener('click', () => {
        row = 2;
        console.log(row)
    })
    const numero3 = document.getElementById("numero3")
    numero3.addEventListener('click', () => {
        row = 3;
        console.log(row)
    })
    const numero4 = document.getElementById("numero4")
    numero4.addEventListener('click', () => {
        row = 4;
        console.log(row)
    })
    const numero5 = document.getElementById("numero5")
    numero5.addEventListener('click', () => {
        row = 5;
        console.log(row)
    })
    const numero6 = document.getElementById("numero6")
    numero6.addEventListener('click', () => {
        row = 6;
        console.log(row)
    })
    const numero7 = document.getElementById("numero7")
    numero7.addEventListener('click', () => {
        row = 7;
        console.log(row)
    })
    const numero8 = document.getElementById("numero8")
    numero8.addEventListener('click', () => {
        row = 8;
        console.log(row)
    })
    const submitBtn= document.getElementById("submit");
    submitBtn.addEventListener('click',()=>
    movimientosdelrey());

    
    
 });



 /*function convertCoord(c) {
    //convert a typical chess coord to a numerical one object, with X and Y, like "a0" -> x: 0, y: 0
    const col = c.charAt(0);
    const row = c.charAt(1);
    const y = col.charCodeAt(0) - 'a'.charCodeAt(0);
    const x = parseInt(row, 10) - 1;
    return { X: x, Y: y };
  }
  
  function convertPos(X,Y) {
    //convert a c.X, c.Y coordinate to a typical chess coord string, like c.X: 0, c.y: 0 -> "a0"
    const col = String.fromCharCode('a'.charCodeAt(0) + Y);
    const row = X + 1;
    return col + row;
  }*/

//sumar los dos id para realizar el movimiento
function movimientosdelrey(){
    //convertCoord();
   // convertPos();
    console.log("Casilla " + col+row)
    let positions= col+row;
   
        /*const position = row[col] + (row + 1);
        positions [position] = "K"*/
   
    return positions;
    
    positions.m

}

let kingposition = null;





// submit = row+col

