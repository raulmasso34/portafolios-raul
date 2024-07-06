class Alumne{
    constructor(nom,edat,grau){
this.#nom
this.edat = edat;
this.grau = grau;

    }
#nom
    getNom(){
        return this.#nom;
    }
    setNom(nomAlumne){
        nom=nomAlumne;
            }
    getEdat(){
        return this.edat;
    }
    setEdat(edatAlumne){
        edat=edatAlumne;
            }
   getGrau(){
        return this.grau;
    }
    setGrau(grauAlumne){
        grau=grauAlumne;
            }

    static registros(arrayAlumnes){
        return arrayAlumnes.length;
        }
}

class SMX extends Alumne {
    constructor(nom,edat,grau){
        super(nom,edat,grau)
    }
    
    getNom(){
        return this.nom;
    }
  
    getEdat(){
        return this.edat;
    }
    getgrau(){
        return this.grau;
    }
}
class DAW extends Alumne {
    constructor(nom,edat,grau){
        super(nom,edat,grau)
    }
    getNom(){
        return this.nom;
    }
    getEdat(){
        return this.edat;
    }
    getgrau(){
        return this.grau;
    }
}
class DAM extends Alumne {
    constructor(nom,edat,grau){
        super(nom,edat,grau)
    }
    getNom(){
        return this.nom;
    }
    getEdat(){
        return this.edat;
    }
    getgrau(){
        return this.grau;
    }
}

class Profesor {
    constructor(nom,cognom,grau){
        this.#nom
        this.cognom = cognom;
        this.grau = grau;

    }
    #nom;
 getNom(){
    return this.#nom;
 }
 getCognom(){
    return this.cognom;
 }
 
getGrau(){
    return this.grau;
}
Ensenya(SMX, DAW, DAM) {
    if (SMX.length > 0) {
        console.log(`Esta enseñando a los alumnos de SMX`);
    } else {
        console.log(`No enseña a los alumnos de SMX`);
    }
    if (DAW.length > 0) {
        console.log(`Esta enseñando a los alumnos de DAW`);
    } else {
        console.log(`No esta enseñando a los alumnos de DAW`);
    }
    if (DAM.length > 0) {
        console.log(`Esta enseñando a los alumnos de DAM`);
    } else {
        console.log(`No enseña a los alumnos de DAM`);
    }
}


}