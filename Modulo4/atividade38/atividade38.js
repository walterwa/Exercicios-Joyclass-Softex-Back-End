/*Definir se número é par ou impar*/

const prompt = require('prompt-sync')()

let numero = prompt('Digite o número: ');

function verificarNumero(numero) {
    if(isNaN(numero)) {
        console.log(`\nVocê passou uma string. Tente novamente`);
    }
    else if(Number.isInteger(numero*1)) {
        console.log(`\nVocê digitou o número ${numero} e ele é: `)
        if(numero % 2 == 0) {
            console.log(`PAR`);
        } else {
            console.log(`ÍMPAR`);
        }
    } else {
        console.log(`Você não passou um número inteiro. Tente novamente`);
    }        
}

verificarNumero(numero)