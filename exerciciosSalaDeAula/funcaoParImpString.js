const prompt = require('prompt-sync') ({sigint: true});

const x = prompt('Digite o valor: ')

// função verifica número
function verificarNumero(x) {
    if(isNaN(x)) {
        console.log(`\nVocê passou uma string: ${x}`);
    } 
    else if(Number.isInteger(x * 1)) {
        console.log(`\nVocê digitou o número ${x} e ele é: `)
        if(x % 2 == 0) {
            console.log(`PAR`);
        } else {
            console.log(`ÍMPAR`);
        }
    } else {
        console.log(`Você não pasosu um número inteiro`);
    }
}

verificarNumero(x);