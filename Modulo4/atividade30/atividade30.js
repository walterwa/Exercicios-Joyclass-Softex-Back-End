/*Crie um programa que contenha os seguintes tipos de funções
1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Criar um programa que utilize essas
três funções de forma lógica,
por exemplo: um programa de calculadora*/

const prompt = require('prompt-sync')();

//Apresentação da calculadora
const apresentação = () => `Instruções:\nVocê precisa digitar 1 número, depois um operador [+ - / *] e, por fim, outro número.`

console.log(apresentação())

//função para aceitar apenas números no prompt
function promptInt(mensagem, tenteNovamente) {
    let msg = mensagem; 
    while (true) {
        entrada = Number(prompt(msg));
        if(!isNaN(entrada)) return entrada;
        msg = tenteNovamente
    }
}

//função para receber dados e fazer os calculos
function calculadora() {
    let numero1 = promptInt('Número 1: ', "Por favor, digite um número.Tente outra vez: ")
    let operador = prompt('Digite o operador desejado [+ - / *]: ')
    let numero2 = promptInt('Número 2: ', "Por favor, digite um número.Tente outra vez: ")
    console.log(`\nResultado: `)
    if(operador == '+') {
        return numero1 + numero2
    } else if (operador == '-') {
        return numero1 - numero2
    } else if (operador == '/') {
        return numero1 / numero2
    } else if (operador == '*') {
        return numero1 * numero2
    } else {
        return `Operador ${operador} inválido.`
    }
}

console.log(calculadora())

