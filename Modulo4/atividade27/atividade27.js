//calculadora
//- receba dois valores, que devem ser salvos em variáveis; 
//- o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos;
//- com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
//- se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma.  
const prompt = require("prompt-sync")({ sigint: true });

let a = Number(prompt('Digite o primeiro valor: '))
let b = Number(prompt('Digite o segundo valor: '))
let operador = prompt("Digite operador desejado: ");

function calculo(a, b, operador) {
    let divisaoSobra = a%b
    if (operador == '+') {
            return a+b
        } 
    else if(operador == '-') {
            return a-b
    } else if(operador == '/') {
            if (divisaoSobra >= 1) {
                console.log(`Sobra da divisão: ${divisaoSobra}`)
            } else {
                console.log(`Não houve sobra da divisão` )
            }
            return a/b
    } else if (operador == '*') {
            return a*b
    } else {
            throw new Error('Operação inválida!')
    }
}

console.log(`Resultado: ` + calculo(a,b,operador));