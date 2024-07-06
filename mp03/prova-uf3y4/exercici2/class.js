class Persona {
    constructor(nom,edat,adreça){
        this.nom = nom;
        this.edat = edat;
        this.adreça = adreça;
    }
    getNom() {
        return this.nom;
      }
    
      getEdat() {
        return this.edat;
      }
    
      getAdreça() {
        return this.adreça;
      }
}

class Professor extends Persona{
constructor(nom,edat,adreça,clase){
    super(nom,edat,adreça)
    this.clase = clase;
    this.estudiants =[];
}
/*Ensenyar(){
    this.estudiants.push(new Estudiant(estudiant.nom, null,null));
}*/
Ensenyar(nom) {
	this.estudiants.push(nom);
}

getEstudiants(){
    return this.estudiants;
}
getClase(){
    return this.clase;
}
}

class Estudiant extends Persona{
    constructor(nom,edat,adreça){
        super(nom,edat,adreça)
        
        this.temari= []
    }
    Estudiar(){
        this.temari.push(new Temari(temari.teoria,temari.practica));
    }
  

}

class Temari {
    constructor(teoria,practica){
        this.teoria = teoria;
        this.practica = practica;
    }
    getTeoria(){
return this.teoria;
    }
    getPractica(){
        return this.practica;
    }
}

class Notes extends Temari{
    constructor(nomalumne,teoria,practica,notafinal){
        super(teoria,practica)
        this.nomalumne = nomalumne;
        this.notafinal = notafinal = (this.teoria*0.4) + (this.practica*0.6);
    }

    Notafinal(){
        return (this.teoria*0.4) + (this.practica*0.6)
    }
    static Notafinal2(teoria,practica){
        return (teoria*0.4) + (practica*0.6)
    }
}