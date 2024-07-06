function operador(){
let x = parseFloat (document.getElementById('x').value);
if ( x  >5 && x < 10 ) {
    document.getElementById('operador1').innerHTML = 'el exercici 1.1 es cert'
    }
    else
    {
        document.getElementById('operador1').innerHTML = 'el exercici 1.1 es Fals ';
    }
}
function operador2(){
    let y = parseFloat (document.getElementById('y').value);
    let z = parseFloat (document.getElementById('z').value);
    if ( y == 0 || z != 10 ) {
        document.getElementById('operador2').innerHTML = 'el exercici 1.2 es cert'
        }
        else
        {
            document.getElementById('operador2').innerHTML = 'el exercici 1.2 es Fals ';
        }
    }
    function operador3(){
        let a = parseFloat (document.getElementById('a').value);
        let b = parseFloat (document.getElementById('b').value);
        let c = parseFloat (document.getElementById('c').value);
        if ( a == 5 && b == 10 || c==15 ) {
            document.getElementById('operador3').innerHTML = 'el exercici 1.3 es cert'
            }
            else
            {
                document.getElementById('operador3').innerHTML = 'el exercici 1.3 es Fals ';
            }
        }
        function operador4(){
            let m = parseFloat (document.getElementById('m').value);
            let n = parseFloat (document.getElementById('n').value);
            if ( m != 0 && n!= 0) {
                document.getElementById('operador4').innerHTML = 'el exercici 1.4 es cert'
                }
                else
                {
                    document.getElementById('operador4').innerHTML = 'el exercici 1.4 es Fals ';
                }
            }
        function operador5(){
            let p = parseFloat (document.getElementById('p').value);
            let q = parseFloat (document.getElementById('q').value);
            if ( p >= 100 && p <= 200 || q > 300) {
                document.getElementById('operador5').innerHTML = 'el exercici 1.5 es cert'
                }
                else
                {
                    document.getElementById('operador5').innerHTML = 'el exercici 1.5 es Fals ';
                }
            }
        function operador6(){
            
            let r = document.getElementById('r').value;
            let s = document.getElementById('s').value;
            if ( r == "cert" && s == "fals" ) {
                document.getElementById('operador6').innerHTML = 'el exercici 1.6 es cert  ';
            }else {
                    document.getElementById('operador6').innerHTML = 'el exercici 1.6 es Fals';
                }
                
            }
        