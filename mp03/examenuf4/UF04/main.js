let alumnes = [];
let profesors = [];


function Alumnes() {
    
    let nom = document.getElementById("nomalumne").value;
    let edat = document.getElementById("edatalumne").value;
    let grau = document.getElementById("graualumne").value;

    if(grau == "SMX" || grau == "DAW" || grau == "DAM" || grau == "smx" || grau == "daw" || grau == "dam"|| grau == "Smx" || grau == "Daw" || grau == "Dam"){
        alert("enviat");
        if (grau == "SMX" || grau == "Smx"|| grau == "smx"){
            let Smx = new SMX(nom,edat,grau);
            alumnes.push(Smx);
            console.log("Nom:", nom);
            console.log("Edat:", edat);
            console.log("Grau:", grau);
            console.log("array alumnes de SMX", alumnes)
            
           }
           else if (grau == "DAW" || grau == "Daw"|| grau == "daw"){
            let Daw = new DAW(nom,edat,grau);
            alumnes.push(Daw);
            console.log("Nom:", nom);
            console.log("Edat:", edat);
            console.log("Grau:", grau);
            console.log("array alumnes de DAW", alumnes)
           }
           else if (grau == "DAM" || grau == "Dam"|| grau == "dam"){
            let Dam = new DAM(nom,edat,grau);
            alumnes.push(Dam);
            console.log("Nom:", nom);
            console.log("Edat:", edat);
            console.log("Grau:", grau);
            console.log("array alumnes de DAM", alumnes)
           }
        
        
    }else{
            alert("dades errades")
        }
    
        console.log("Cuantos alumnes", Alumne.registros(alumnes))
    }
   

function Profesors() {
    
    let nom = document.getElementById("nomprofesor").value;
    let cognom = document.getElementById("cognomprofesor").value;
    let grau = document.getElementById("grauprofesor").value;

    if(grau == "SMX" || grau == "DAW" || grau == "DAM" || grau == "smx" || grau == "daw" || grau == "dam"|| grau == "Smx" || grau == "Daw" || grau == "Dam"){
        alert("enviat");
        if (grau == "SMX" || grau == "Smx"|| grau == "smx"){
           let profesorsmx = new Profesor(nom,cognom,grau)
            profesors.push(profesorsmx);
            console.log("Nom:", nom);
            console.log("cognom:", cognom);
            console.log("Grau:", grau);
            console.log("array profesor de SMX", profesors)
            
           }
           else if (grau == "DAW" || grau == "Daw"|| grau == "daw"){
            let profesordaw = new Profesor(nom,cognom,grau)
            profesors.push(profesordaw);
            console.log("Nom:", nom);
            console.log("cognom:", cognom);
            console.log("Grau:", grau);
            console.log("array profesor de DAW", profesors)
           }
           else if (grau == "DAM" || grau == "Dam"|| grau == "dam"){
            let profesordaw = new Profesor(nom,cognom,grau)
            profesors.push(profesordaw);
            console.log("Nom:", nom);
            console.log("cognom:", cognom);
            console.log("Grau:", grau);
            console.log("array profesor deDAM", profesors)
           }
        
        
    }else{
            alert("dades errades")
        }
        
}





