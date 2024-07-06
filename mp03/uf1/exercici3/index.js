function calcular(){
    let prestamo=parseFloat(document.getElementById("prestamo").value);
    let interes=parseFloat(document.getElementById("interes").value);
    let meses=parseFloat(document.getElementById("meses").value);
    if(isNaN(prestamo)&&isNaN(meses)&&isNaN(interes)){
        alert("Rellena el formulario");
    }else if(isNaN(prestamo) && isNaN(meses)){
        alert("Rellena interes y año")
    }else if(isNaN(interes) && isNaN(meses)){
        alert("Rellena interes y año");
    }else if(isNaN(interes)&&isNaN(prestamo)){
        alert("Rellena prestamo y interes");
    }else if(isNaN(meses)){
        alert("Rellena año");
    }else if(isNaN(prestamo)){
        alert("Rellena prestamo");
    }else if(isNaN(interes)){
        alert("Rellena interes");
    }else{

    interes=parseFloat(interes)/100/12;
    meses=parseInt(meses)*12;
   quota = (interes * prestamo)/(1 - ((1 + interes) ** (-1 * meses)));
   document.getElementById('total').innerHTML="";
 

    
    var body=document.getElementById("total");

    var tabla = document.createElement("table");
    var tblbody = document.createElement("tbody");
    var thead = document.createElement("thead");
    var trhead = document.createElement("tr");     
    var titols = ["Meses","Quota","Pendent","Interes"];
// este bucle es para la cabecera de la tabla     
    for(i=0;i<3;i++) {
      var titol = document.createElement("th");
      
      // thead
//      var titol = document.createElement("th");
      var textoTitol = document.createTextNode(titols[i]);
      titol.appendChild(textoTitol);
      trhead.appendChild(titol);
    }
// tbody
    for(m = 0; m<meses;m++){
        var trs = document.createElement("tr");  
        
     
        for(j=0;j<3;j++){
            var celda = document.createElement("td");
            var textoCelda;
            
            if(j==2){
              
                textoCelda = document.createTextNode(parseFloat(prestamo).toFixed(0));
                   prestamo -= quota - prestamo*interes;
            }else if(j==1){
                textoCelda = document.createTextNode(parseFloat(quota).toFixed(0));
         
            }else{
                textoCelda = document.createTextNode("Mes "+ (m+1));
                
            }
        
            celda.appendChild(textoCelda);
            trs.appendChild(celda);
        }
        tblbody.appendChild(trs);
    }
 
    
    
    
    thead.appendChild(trhead);
    tabla.appendChild(thead);
    tabla.appendChild(tblbody);
    body.appendChild(tabla);
    tabla.setAttribute("border","2");
}
  }



