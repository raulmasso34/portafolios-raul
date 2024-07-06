
const professor = new Professor("Gerard",40,"olesa","MP03 y MP04");
const estudiant = new Estudiant("Raul",19,"Esparregura")
const temari = new Temari("programacio orientat a objectes o POO","crea una clase principal Persona y tres clases extendidas de esta que se llamen: Professor,Estudiant y Temari. ")
const nota = new Notes("Raul",8,8,null)
const nota2 = new Notes("Bruno",9,8,null)
console.log("L'alumne de " + professor.nom + " es " + estudiant.nom + " que li dona les clases de " + professor.clase )
const alumno1 = new Estudiant("raul",null,null);
professor.Ensenyar(alumno1);
const obteneralumno = professor.getEstudiants();
document.getElementById("almacenar").innerHTML= `
<p>El professor es ${professor.nom} i el seu alumne ${estudiant.nom}</p><br>
<p>L'Alumne ${estudiant.nom} va a les clases ${professor.clase} del professor ${professor.nom} y en la clase de MP03 estudiara ${temari.teoria} y fara la practica següent: ${temari.practica}</p>
<p>Sin estatic ${nota2.nomalumne} ${nota2.Notafinal()}</p>
<p>Amb estatic ${Notes.Notafinal2(8,7)}</p>
<p>Declarant en la variable ${nota.notafinal}</p>
<p>${obteneralumno}</p>
`


function Mostrarnota(){
document.getElementById("almacenar2").innerHTML = `
<p>Sin estatic ${nota2.nomalumne} ${nota2.Notafinal()}</p>
<p>Amb estatic ${Notes.Notafinal2(8,7)}</p>
<p>Declarant en la variable ${nota.notafinal}</p>
`
}
function Mostrarnota2(){
    document.getElementById("almacenar2").innerHTML = `
    <p>Sin estatic ${nota.nomalumne} ${nota2.Notafinal()}</p>
    <p>Amb estatic ${Notes.Notafinal2(8,7)}</p>
    <p>Declarant en la variable ${nota.notafinal}</p>
    `
    }
    
