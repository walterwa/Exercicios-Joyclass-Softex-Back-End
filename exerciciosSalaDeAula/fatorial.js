const prompt = require('prompt-sync')();

//let numero = Number(prompt('Digite um número inteiro: '))

//se o número for float, ele não pode prosseguir
//se for negativo, não pode prosseguir

let numero;


while(isNaN(numero)) {
    numero = Number(prompt('Digite um número inteiro: '))
}

function fatorial(numero) {   


    let resultadoFatorial = numero;
    console.log(`O fatorial de ${parseInt(numero)}: `)
    
    if (numero == 0 || numero == 1) {
        return 1
    } else if(numero > 1 && Number.isInteger(numero)) {
        while(numero > 1) {
            numero--
            resultadoFatorial = resultadoFatorial * numero
            //console.log(numero)
        }
    } else {
        return "Você digitou um número errado. Tente digitar um número inteiro positivo."
    }
    return resultadoFatorial
}


console.log(`Resultado = ${fatorial(numero)}`);


