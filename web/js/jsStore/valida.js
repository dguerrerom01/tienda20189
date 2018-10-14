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

        validarLetrasConEspacio : function(evt){

               parametro.nodo = evt.target;

               parametro.limite = STORE.getLimite(parametro.nodo);

               parametro.expregular = new RegExp("^([a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]{" +
                    parametro.limite.limiteInferior  + "," + parametro.limite.limiteSuperior + "})$");

               parametro.mensajeError = "ERROR:Cadena Con Espacio y entre "  +  parametro.limite.limiteInferior + ", " + parametro.limite.limiteSuperior;

              STORE.Valida.validarExpRegular();
        },

        validarSexo : function(evt){

            parametro.nodo = evt.target;

            var sexo = ['hombre', 'mujer', 'h', 'm', 'masculino', 'femenino'];

            var iterador = sexo.values();

            var result = false;

            for (let letra of iterador) {

                //alert(parametro.nodo.value);

                if (letra ==  parametro.nodo.value){
                    result = true;
                    break;
                }
            }

            parametro.mensajeError = "ERROR:Selecciona Hombre o mujer";


            if (!result) {

                STORE.Valida.activarError();

                STORE.Valida.activarSubmit();

            } else {

                parametro.nodo.style.backgroundColor = VALIDO_COLOR;

                parametro.error.style.display="none";

                STORE.Valida.activarSiguiente();

                STORE.Valida.activarSubmit();

            }

        },

        activarError : function(){

            parametro.nodo.style.backgroundColor =  ERROR_COLOR;

            parametro.error.innerHTML = parametro.mensajeError;

            parametro.error.style.display="";

        },

        activarSiguiente : function(){

            for (var i = 0; i < STORE.list_input.length; i++) {

                if (STORE.list_input[i] === parametro.nodo) {

                    if ((i + 1 < STORE.list_input.length)) {

                        if (!eval("div_" + STORE.list_input[i + 1].id).style.display == ''){

                            eval("div_" + STORE.list_input[i + 1].id).style.display = '';

                            STORE.list_input[i + 1].style.backgroundColor = ERROR_COLOR;
                        }


                    }
                }
            }

        },

        activarSubmit : function(){

            var i = 0;

            while (i < STORE.list_input.length) {

                if (STORE.list_input[i].style.backgroundColor === ERROR_COLOR) {

                    i = STORE.list_input.length;

                }
                i++;
            }

            if (i > STORE.list_input.length) {

                parametro.submit.style.display = 'none';

            } else {

                parametro.submit.style.display = '';

            }
        },

        validarExpRegular : function(){

            if(!parametro.expregular.test(parametro.nodo.value)){

                STORE.Valida.activarError();

                STORE.Valida.activarSubmit();

                return false;
            }

            parametro.nodo.style.backgroundColor = VALIDO_COLOR;

           // alert("VALIDO_COLOR");

            parametro.error.style.display="none";

            STORE.Valida.activarSiguiente();

            STORE.Valida.activarSubmit();

            return true;

        }

    }

    })(window)









