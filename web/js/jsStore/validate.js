/**
 * Created by Luciano on 03/10/2018.
 */


STORE.namespace('STORE.ValidacionUtil');
(function(g){

    'use strict';

    STORE.ValidacionUtil  = {

        addLimitePatron : function(parametro) {

            parametro.limite = STORE.getLimite(parametro.nodo);

            if (parametro.limite.limiteInferior > 0) {

                parametro.patron += "{" + parametro.limite.limiteInferior  + "," + parametro.limite.limiteSuperior + "})$";

                parametro.mensajeError +=  " , entre"  + parametro.limite.limiteInferior + ", " + parametro.limite.limiteSuperior;

            } else {

                parametro.patron +=  "*)$";
            }



            STORE.ValidacionUtil.valorarConsecuencia(STORE.ValidacionUtil.validarExpRegular(parametro),parametro);

        },

        validarExpRegular : function(parametro){

            parametro.expregular = new RegExp( parametro.patron);

            return parametro.expregular.test(parametro.text);
        },

        validarListaValores : function(miValue, lista){

            var iterador = lista.values();

            var result = false;

            for (let value of iterador) {

                if (value == miValue) {
                    result = true;
                    break;
                }
            }

            return result;
        },

        valorarConsecuencia :  function (valido, parametro) {

            if (valido){

                parametro.nodo.style.backgroundColor = VALIDO_COLOR;

                STORE.Error.off();

                STORE.Submit.on();

                STORE.Lista.next(parametro.nodo);

            } else {

                STORE.Error.set_message(parametro.mensajeError);

                parametro.nodo.style.backgroundColor = STORE.Error.COLOR;

                STORE.Error.on();

                STORE.Submit.off();
            }

        }
    }
})(window)


STORE.namespace('STORE.ValidacionExpresionRegular');
(function(g){

    'use strict';

    var parametro = {};

    STORE.ValidacionExpresionRegular = {

        validarLetrasConEspacio : function(evt){

            parametro.nodo = evt.target;

            parametro.patron = "^([a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]";

            parametro.mensajeError = "ERROR:Letras con Espacio ";

            STORE.ValidacionUtil.addLimitePatron(parametro);

            parametro.text = parametro.nodo.value;

            STORE.ValidacionUtil.valorarConsecuencia(STORE.ValidacionUtil.validarExpRegular(parametro),parametro);
        },

        validarLetrasSinEspacio : function(evt){

            parametro.nodo = evt.target;

            parametro.patron =  "^([a-zA-ZñÑáéíóúÁÉÍÓÚ]";

            parametro.mensajeError = "ERROR:Letras sin Espacio ";

            STORE.ValidacionUtil.addLimitePatron(parametro);

            parametro.text = parametro.nodo.value;

            STORE.ValidacionUtil.valorarConsecuencia(STORE.ValidacionUtil.validarExpRegular(parametro),parametro);

        }
    }

})(window)

//STORE.namespace('STORE.ValidacionExpresionRegularLimite');

STORE.namespace('STORE.ValidarListaValores');
(function(g) {

    'use strict';

    var parametro = {};

    STORE.ValidarListaValores = {

        validarSexo : function(evt) {

            parametro.nodo = evt.target;

            var sexo = ['hombre', 'mujer', 'm', 'f', 'masculino', 'femenino'];

            parametro.mensajeError = "ERROR:Selecciona Hombre o mujer";

            STORE.ValidacionUtil.valorarConsecuencia(STORE.ValidacionUtil.validarListaValores(parametro.nodo.value, sexo),parametro);

        }

    }

})(window)

STORE.namespace('STORE.ValidarFicheroName');
(function(g) {

    'use strict';

    var parametro = {};

    STORE.ValidarFicheroName = {

        validarImagenName : function(evt) {

            parametro.nodo = evt.target;

            var tipo = ['jpg', 'png'];

            parametro.mensajeError = "ERROR:Selecciona nueva imagen:";

            if (STORE.ValidacionUtil.validarListaValores(STORE.File.getFileExtensionFromURI(parametro.nodo.value), tipo)){

                parametro.patron = "^([a-zA-ZñÑáéíóúÁÉÍÓÚ0_9\\\:\.\/])"; //"(?:\w+:)?\/\/[^/]+([^?#]+)";  //"^([a-zA-Z]:)?(\\{2}|\/)?([a-zA-Z0-9\\s_@-^!#$%&+={}\[\]]+(\\{2}|\/)?)+(\.jpg|\.png+)?$";

                parametro.mensajeError += " Cualquier caracter ";

                parametro.text = parametro.nodo.value;

               if( STORE.ValidacionUtil.valorarConsecuencia(STORE.ValidacionUtil.validarExpRegular(parametro),parametro))
               {
                   parametro.patron = "^([a-zA-ZñÑáéíóúÁÉÍÓÚ0_9\\s]";

                   parametro.mensajeError = "ERROR:Letras y numeros con Espacio ";

                   parametro.text = STORE.File.getFileNameFromURI(parametro.node.value);

                   STORE.ValidacionUtil.valorarConsecuencia(STORE.ValidacionUtil.validarExpRegular(parametro),parametro);
               }

            } else {

                STORE.ValidacionUtil.valorarConsecuencia(false,parametro);
            }
        }


    }

})(window)
