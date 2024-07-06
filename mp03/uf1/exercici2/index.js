function calcular(){
    let prestamo=parseFloat(document.getElementById("prestamo").value);
    let interes=parseFloat(document.getElementById("interes").value);
    let meses=parseFloat(document.getElementById("meses").value);
    interes=parseFloat(interes)/100/12;
    meses=parseInt(meses)*12;
   quota = (interes * prestamo)/(1 - ((1 + interes) ** (-1 * meses)));
    document.getElementById('total').innerHTML = "la quota es de "  + parseFloat(quota).toFixed(2);

}
