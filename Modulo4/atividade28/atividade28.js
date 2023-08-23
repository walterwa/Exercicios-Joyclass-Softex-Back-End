/*Crie dois códigos de sistema de notas para uma escola. 
O primeiro código deve ser um programa que informa se o aluno reprovou, 
ou não, com base nas três notas que ele adicionou ao programa. Utilize, 
no mínimo, um operador de atribuição e um operador ternário. 
O segundo código é um programa que o aluno deve escrever duas notas e 
o retorno informa a nota mínima que ele deve tirar na próxima prova 
para poder passar com nota sete.*/
const prompt = require('prompt-sync')();

let nota1, nota2, nota3, media

//prompt que recebe apenas valores inteiros e maiores que 7 e menores que 10
//a função deverá receber dois argumentos
function promptInteiro(mensagem, tenteNovamente) {
    let msg = mensagem;
    while (true) {
        let valor = Number(prompt(msg));
        if(!isNaN(valor)) {
            if(valor >= 0 && valor <= 10)
                return valor;
        }
        msg = tenteNovamente;
    }
}

nota1 = promptInteiro("Digite a primeira nota: ", "Por favor, digite um valor válido: ");
nota2 = promptInteiro("Digite a segunda nota: ", "Por favor, digite um valor válido: ");
nota3 = promptInteiro("Digite a terceira nota: ", "Por favor, digite um valor válido: ");


//validação dos tipos
//console.log(typeof(nota1, nota2, nota3))

media = (nota1 + nota2 + nota3)/3

console.log(media >= 7 ? 'Aprovado!' : 'Reprovado!');
console.log(`\nMedia: ${media.toFixed(2)}`)
