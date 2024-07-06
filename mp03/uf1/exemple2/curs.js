function canviarTitol(){
    document.getElementById('h2').innerHTML = "Raul";

}
function canviarText(){
    document.getElementById('text').innerHTML = "javascript";
    
}
function multiplicar(){
    document.getElementById('multiplicar').innerHTML = "El resultat de multiplicar 3*3*3 es:" + 3*3*3;
    
}
function sumar(){
    let primerNum=4;
    let segonNum=3;
    let tercerNum=3;
    let resultatNumeric = primerNum + segonNum + tercerNum;
    document.getElementById('multiplicar').innerHTML = "El resultat de sumar 4+3+3 es:" + resultatNumeric;
    
}
function sumarText(){
    let primerNum=4;
    let segonNum=3;
    let tercerNum=3;
    let resultatText = primerNum +''+ segonNum +''+ tercerNum;
    document.getElementById('multiplicar').innerHTML = "El resultat de sumar els textos es:" + resultatText;
}
function multiplicar(){
    let primerNum=document.getElementById("primerNum").innerHtml
    let segonNum=3;
    let tercerNum=3;
    let resultatText = primerNum +''+ segonNum +''+ tercerNum;
    document.getElementById('multiplicar').innerHTML = "El resultat de sumar els textos es:" + resultatText;
}

