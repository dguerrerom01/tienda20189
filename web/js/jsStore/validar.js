/**
 * Created by Luciano on 03/10/2018.
 */
STORE.namespace('STORE.Valida');
(function(g){
    'use strict';
    STORE.Valida = {

        validarCadenaConEspacio : function(param){

            var expregular = new RegExp("^([A-Za-z\\s]{" +
                param.limite.limiteInferior  + "," + param.limite.limiteSuperior + "})$");

            var parametro = {};
            parametro.nodo = param.nodo;
            parametro.expregular = expregular;

            STORE.Valida.validarRexpregular(parametro);

        },




        validarRexpregular : function(parametro){

            if(!parametro.expregular.test(parametro.nodo.value)){


                parametro.nodo.style.backgroundColor = "red";

                return false;

            }
            parametro.nodo.style.backgroundColor = "blue";
            return true;




        }

    }










    })(window)









