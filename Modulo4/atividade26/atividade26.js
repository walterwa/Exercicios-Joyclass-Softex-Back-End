/*Questão: calculadora de média
inserir 3 notas (0-10) pelo usuário e depois exibir com o resultado com o console.log().
armazenar a média em variável de mesmo nome*/
const prompt = require("prompt-sync")({ sigint: true });

// let nota1 = Number;
// let nota2 = Number; 
// let nota3 = Number;
let media;

let nota1 = parseInt(prompt('Digite a primeira nota [0-10]: '));
let nota2 = parseInt(prompt('Digite a primeira nota [0-10]: '));
let nota3 = parseInt(prompt('Digite a primeira nota [0-10]: '));

//verificação de tipos: 
console.log(`\nAs variáveis são do tipo:  ${typeof(nota1)}, ${typeof(nota2)}, ${typeof(nota3)}`);

//calculando a média
media = (nota1 + nota2 + nota3)/3;

//resultados:
console.log(`\nSua média foi: ${media}`);
if(media >= 7) {
    console.log('Parabéns, você está aprovado(a)')
} else {
    console.log('Infelizment você está reprovado(a)')
}



