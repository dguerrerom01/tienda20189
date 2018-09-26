/* -------------
        NODOS
----------------
*/
var body = document.getElementById('body');
var grupoPiezas = document.getElementsByTagName('a');
/* ----------------
        FUNCIONES
-------------------
*/
function generarNumero(max, min) {
  return parseInt((Math.random() * (max - min + 1) + min));
}

function generarColor(opacidad) {
  /* Valores maximos y minimos de Red, Green y Blue al generar el numero */
  var MAXR = 25;
  var MAXG = 200;
  var MAXB = 170;

  var MINR = 20;
  var MING = 150;
  var MINB = 120;

  return 'rgba(' + generarNumero(MAXR, MINR) + ', ' + generarNumero(MAXG, MING) + ', '
  + generarNumero(MAXB, MINB) + ', ' + opacidad + ')';
}

function establecerColor(input, opacidad) {
    input.style.background = generarColor(opacidad);
}

/* ---------------------------
        EVENTOS A LA ESCUCHA
------------------------------
*/

body.addEventListener('mouseover',
  function () {
    window.setTimeout(establecerColor(body, .2), 1000);
  }, false);

window.addEventListener('load',
  function () {
    establecerColor(body, .2);
    for(var i = 0; i < grupoPiezas.length ; i++){
        establecerColor(grupoPiezas[i], 1);
    }    
  }, false);
// Clausure
for(var i = 0; i < grupoPiezas.length ; i++){    
    this.nodo = grupoPiezas[i];
    nodo.onmouseover = function(t){
        return function(){ establecerColor(t, 1);};
    }(grupoPiezas[i]);
}