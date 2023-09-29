"use strict";
function selado(alvo) {
    console.log(alvo);
}
function cor(valor) {
    //fábrica de decoradores (decorators factory)
    return function (alvo) {
        //decorador que vai executar algo com 'alvo' e 'valor'
    };
}
