import { marcadoCeldas,moverPieza,quePieza} from "./gamelogic.js";
import { limpiezaCeldas } from "./gui.js";
let turn = 1;
let twhite = 2;
let tblack = 2;


function write(){
document.getElementById("turn").innerHTML =""+" Turno de "+((turn%2==1)? "blancas":"negras") ;
document.getElementById("twhite").innerHTML =""+" Torres blancs "+twhite;
document.getElementById("tblack").innerHTML ="" +"Torre negra "+tblack;
}
let movementStarted=null;
function init(){
   $(document).ready(function(){
       $(".chess-board").click(function() {
           let cellId = $(this).attr("id");
           if ($("#" + cellId).html() == "♜" || $("#" + cellId).html() == "♖") {
               if(movementStarted==null&& ($("#" + cellId).html() == "♜" && turn%2==1 || $("#" + cellId).html() == "♖" && turn%2==0)){
                   movementStarted=cellId;
                   marcadoCeldas($("#" + cellId).html(),cellId);
               }
               else if(cellId==movementStarted){
                   movementStarted=null;
                   limpiezaCeldas();
               }
               else if(movementStarted !=null){
                   if ($("#" + cellId).html() != $("#" + movementStarted).html()){
               // Arribar aquí implica canvi de torn, perquè es menja una torre.
                       moverPieza(movementStarted,cellId);
                       (quePieza(cellId) == "♜" ) ? twhite-- : tblack--;
                       movementStarted=null;
                       limpiezaCeldas();
                       turn++;
                       write();
                       twhite == 0 ? alert("Han ganado las torres negras") : tblack == 0 ? alert("Han ganado las torres blancas") : null;


                   }
               }
           }
           else if(cellId!=undefined){// se llega cuando se hace click en una celda que no tiene pieza
               if(movementStarted!=null) {
                   moverPieza(movementStarted,cellId);
                   movementStarted=null;
                   limpiezaCeldas();
                   turn++;
                   write();
               }
           }
       });
   });
}
document.addEventListener("DOMContentLoaded",()=>{write();
   init();});