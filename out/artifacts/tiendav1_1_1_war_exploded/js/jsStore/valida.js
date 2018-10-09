/**
 * Created by Luciano on 03/10/2018.
 */
STORE.namespace('STORE.Valida');
(function(g){

    'use strict';

    var parametro = {};

    parametro.error = $("alertaError");

    parametro.submit = $("submit");

    STORE.Valida = {

        validarCadenaConEspacio : function(){

            parametro.nodo = document.activeElement;

            STORE.assert(typeof parametro.nodo == 'string');

            var limite = STORE.getLimite(parametro.nodo);

            parametro.limite = limite;

            var expregular = new RegExp("^([a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]{" +
                parametro.limite.limiteInferior  + "," + parametro.limite.limiteSuperior + "})$");

            parametro.expregular = expregular;

            parametro.mensajeError = "ERROR:Cadena Con Espacio y entre "  +  parametro.limite.limiteInferior + ", " + parametro.limite.limiteSuperior;

            if (STORE.Valida.validarRexpregular()) {

                //Si es true activar el siguiente

                for (var i = 0; i < STORE.list_input.length; i++) {

                    if (STORE.list_input[i] === parametro.nodo) {

                        if ((i + 1 < STORE.list_input.length)) {

                            eval("div_" + STORE.list_input[i + 1].id).style.display = '';

                            STORE.list_input[i + 1].style.backgroundColor = ERROR_COLOR;
                        }
                    }
                }

                var i = 0;

                // Comprobar que está todo validado

                while (i < STORE.list_input.length) {

                    if (STORE.list_input[i].style.backgroundColor === ERROR_COLOR) {

                        i = STORE.list_input.length;

                    }
                    i++;
                }

                if (i > STORE.list_input.length) {

                    $("submit").style.display = 'none';

                } else {

                    $("submit").style.display = '';

                }

            }
                else   {

                    $("submit").style.display = 'none';

                }
        },


        validarRexpregular : function(){

            if(!parametro.expregular.test(parametro.nodo.value)){

                parametro.nodo.style.backgroundColor =  ERROR_COLOR;

                parametro.error.innerHTML = parametro.mensajeError;

                parametro.error.style.display="";

                return false;

            }
            parametro.nodo.style.backgroundColor = VALIDO_COLOR;

            parametro.error.style.display="none";

            return true;

        }

    }

    })(window)









