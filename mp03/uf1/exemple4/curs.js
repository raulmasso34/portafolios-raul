function canviarTitol(){
    document.getElementById('h2').innerHTML = "Raul";

}
function canviarText(){
    document.getElementById('text').innerHTML = "javascript";
    
}
function multiplicar(){
    let primerNum=document.getElementById("primerNum").value;
    let segonNum=document.getElementById("segonNum").value;
    let tercerNum=document.getElementById("tercerNum").value;
    document.getElementById('multiplicar').innerHTML = 'El resultat de multiplicar ' + primerNum + ' * ' + segonNum + ' * ' + tercerNum + ' es: ' + primerNum*segonNum*tercerNum;
    
}
function sumar(){
    let primerNum=parseFloat(document.getElementById("primerNum").value);
    let segonNum=parseFloat(document.getElementById("segonNum").value);
    let tercerNum=parseFloat(document.getElementById("tercerNum").value);
    let resultatNumeric = primerNum + segonNum + tercerNum;
    document.getElementById('multiplicar').innerHTML = 'El resultat de sumar els numeros es: ' + resultatNumeric;
    
}
function sumarText(){
    let primerNum=4;
    let segonNum=3;
    let tercerNum=3;
    let resultatText = primerNum +''+ segonNum +''+ tercerNum;
    document.getElementById('multiplicar').innerHTML = "El resultat de sumar els textos es:" + resultatText;
}

;