/*
Desenvolva um programa que recebe do usuário nome completo e ano de nascimento
que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o 
nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, 
o sistema informará o erro e continuará perguntando até que um valor correto 
seja preenchido.
*/

const prompt = require("prompt-sync")({ sigint: true });

let nome, anoNascimento, idade;

nome = prompt('Digite o seu nome: ');


while (isNaN(anoNascimento) || anoNascimento < 1922 || anoNascimento > 2021) {
    try {
        anoNascimento = parseInt(prompt('Digite o ano de seu nascimento: '));
        
        if(anoNascimento >= 1922 && anoNascimento <= 2021) {
            console.log(`Nome: ${nome}\nAno de Nascimento: ${anoNascimento}`);
            idade = 2022 - anoNascimento;
            console.log(`Sua idade (até o fim de 2022): ${idade} ano(s)`);
        } else {
            throw new Error('Ano inválido, por favor, digite um valor válido entre 1922-2021.');
        }
    } catch (error) {
        console.log(error);
    }
}