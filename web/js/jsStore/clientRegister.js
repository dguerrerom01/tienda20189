STORE.namespace('STORE.NewClient');
(function(g){
    'use strict';

    var valida = STORE.Valida;

    var clientFirstName, clientLastName;

    STORE.NewClient.validateClientFirstName = function(){

       var nodo = $("clientFirstName");

       var limite = STORE.getLimite(nodo);

       var parametro = {};

       parametro.nodo = nodo;
       parametro.limite = limite;

       valida.validarCadenaConEspacio(parametro);

    }



    clientFirstName = $("clientFirstName");
    clientFirstName.addEventListener("keyup",STORE.NewClient.validateClientFirstName, false);


}) (window,undefined);