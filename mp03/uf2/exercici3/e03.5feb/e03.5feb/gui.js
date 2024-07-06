import { fusionarCoordenadas } from "./gamelogic.js";
export function marcar(x,y){
    const idCelda=fusionarCoordenadas(x,y); // x->0 y->7 ="07"
    const celda=document.getElementById(idCelda);
    if(celda.classList.contains('light')){
        celda.classList.replace('light','markedlight');
    } else if(celda.classList.contains('dark')){
        celda.classList.replace('dark','markeddark');
    }
}
export function desmarcar(x,y){
    const idCelda=fusionarCoordenadas(x,y); // x->0 y->7 ="07"
    const celda=document.getElementById(idCelda);
    if(celda.classList.contains('markedlight')){
        celda.classList.replace('markedlight','light');
    } else if(celda.classList.contains('markeddark')){
        celda.classList.replace('markeddark','dark');
    }
}
export function limpiezaCeldas(){
	for(let i=0;i<8;i++){
		for(let j=0;j<8;j++){
			desmarcar(i,j);
		}
	}
}










