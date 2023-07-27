/*
Problema: Desenvolva um programa que só deve aceitar números pares. Siga as seguintes instruções:
 - caso um número ímpar seja digitado, informe ao usuário que ele digitou um valor ímpar e peça novamente por um número par;

 - caso uma letra seja digitada, informe ao usuário que ele digitou um caractere inválido e peça novamente por um número par.
*/
const prompt = require("prompt-sync")({ sigint: true }); //importando o prompt

let numero_correto, numero;
numero_correto = false;

while (numero_correto == false) {
    try {
        numero = parseInt(prompt('Digite o número para consulta: '));
        //verificando se o número possui um valor válido e entrando no loop
        if (isNaN(numero) == false) {
            if (numero % 2 != 0) {
                numero_correto = false;
                resultado = console.log(`Você digitou o número ímpar: ${numero}. Por favor, tente novamente`);  
            } else {
                numero_correto = true;
                resultado = console.log(`Parabéns, Você digitou o número par: ${numero}. Fim do Programa`);
            }
        } else {
            throw new Error("Valor digitado não é um número válido.");
        }
    } catch (error) {
        console.log(error);
        console.log("Valor inválido, por favor, digite novamente.");
    }
}