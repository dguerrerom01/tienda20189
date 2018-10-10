STORE.namespace('STORE.list_input');

(function(g){
    'use strict';

    var form = $("register");

    STORE.list_input = form.querySelectorAll("INPUT");

    for (var i = 1; i < STORE.list_input.length; i++) {

        eval("div_" + STORE.list_input[i].id).style.display = 'none';

    }

    $("alertaError").style.display = 'none';

    $("submit").style.display = 'none';

    var valida = STORE.Valida;

    for (var i = 0; i < STORE.list_input.length; i++) {

        STORE.list_input[i].addEventListener("change",eval("STORE.Valida." + STORE.list_input[i].dataset.functioncallback),false);
        STORE.list_input[i].addEventListener("keyup",eval("STORE.Valida." + STORE.list_input[i].dataset.functioncallback),false);
        STORE.list_input[i].style.backgroundColor = ERROR_COLOR;
    }

}) (window,undefined);