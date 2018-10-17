/**
 * Created by Luciano on 03/10/2018.
 */

STORE.namespace('STORE.ValidacionExpresionRegular');
(function(g){

    'use strict';

    var parametro = {};

    STORE.ValidacionExpresionRegular = {

        validarLetrasConEspacio : function(evt){

            /*
            parametro.nodo = evt.target;
            patron
            mensaje de error */
        },
        validarPropiedades : function(a,b,c){

            parametro.nodo = evt.target;

            parametro.limite = STORE.getLimite(parametro.nodo);

            parametro.expregular = new RegExp("^([a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]{" +
                parametro.limite.limiteInferior  + "," + parametro.limite.limiteSuperior + "})$");

            parametro.mensajeError = "ERROR:Cadena Con Espacio y entre "  +  parametro.limite.limiteInferior + ", " + parametro.limite.limiteSuperior;

            STORE.ValidacionExpresionRegular.validarConsecuencias(STORE.ValidacionExpresionRegular.validarExpRegular());


        },

        validarExpRegular : function(){

            if(parametro.expregular.test(parametro.nodo.value)){

                 return true;
            }

            return false;

        },

        validarConsecuencias: function(valido) {

            if (valido){

                parametro.nodo.style.backgroundColor = VALIDO_COLOR;

                STORE.Error.off();

                STORE.Submit.on();

                STORE.Lista.next(parametro.nodo);

            } else {

                parametro.nodo.style.backgroundColor = STORE.Error.COLOR;

                STORE.Error.set_message(parametro.mensajeError);

                STORE.Error.on();

                STORE.Submit.off();
            }

        }

    }

})(window)

STORE.namespace('STORE.ValidarListaValores');
(function(g) {

    'use strict';

    var parametro = {};

    STORE.ValidarListaValores = {

        validarSexo : function(evt) {

            parametro.nodo = evt.target;

            var sexo = ['hombre', 'mujer', 'm', 'f', 'masculino', 'femenino'];

            var iterador = sexo.values();

            var result = false;

            for (let letra of iterador) {

                //alert(parametro.nodo.value);

                if (letra == parametro.nodo.value) {
                    result = true;
                    break;
                }
            }

            parametro.mensajeError = "ERROR:Selecciona Hombre o mujer";

            STORE.ValidarListaValores.validarConsecuencias(result);

        },

        validarConsecuencias: function(valido) {

                if (valido){

                    parametro.nodo.style.backgroundColor = VALIDO_COLOR;

                    STORE.Error.off();

                    STORE.Submit.on();

                    STORE.Lista.next(parametro.nodo);

                } else {

                    STORE.Error.set_message(parametro.mensajeError);

                    STORE.Error.on();

                    STORE.Submit.off();
                }

            }

        }

})(window)






