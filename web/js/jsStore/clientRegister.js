STORE.namespace('STORE.NewClient');
(function(g){
    'use strict';

    var clientFirstName, clientLastName;
    STORE.NewClient.validateClientFirstName = function(){
        alert("Has levantado la pulsación");
    }
    clientFirstName = $("clientFirstName");
    clientFirstName.addEventListener("keyup",STORE.NewClient.validateClientFirstName, false);


}) (window,undefined);