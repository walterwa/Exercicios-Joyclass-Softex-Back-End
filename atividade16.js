/* 
Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. 
Caso o número do voto não corresponda a nenhum candidato ou seja branco, 
ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, 
o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, 
aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, 
os brancos e nulos. 
*/

const prompt = require("prompt-sync")({ sigint: true });

let continuar = true;
let continuarVotacao = 3; //variável de controle da continuação da votação, número inicial já ativa a continuação na primeira vez
let contadorX = 0, contadorY = 0, contadorZ = 0, contador0 = 0, contadorNulo = 0;

while (continuar == true) {    
    let numeroCandidato = 'a';
    try {
        do {
            numeroCandidato = parseInt(prompt('Digite o número do candidato que você deseja votar: '));
        } while (isNaN(numeroCandidato));

        if (numeroCandidato == 889) {
            contadorX += 1;
        } else if (numeroCandidato == 847){
            contadorY += 1;
        } else if (numeroCandidato == 515) {
            contadorZ += 1;
        } else if (numeroCandidato == 0) {
            contador0 += 1;
        } else {
                contadorNulo += 1;
            }
        } catch(err) {
        console.log("Digite um valor válido.");
    }
    //Segunda parte, continuar ou não a votação
        do {
            continuarVotacao = parseInt(prompt('Deseja continuar a votação (1.Sim 2. Não): '));
        } while (continuarVotacao < 1 || continuarVotacao > 2 || isNaN(continuarVotacao));

        if (continuarVotacao == 2) {
            continuar = false;
            console.log(`Resultado da votação:`);
            console.log('*-*-*-*-*-*-*-*-*-*-*-*-*');
            console.log(`Candidato X = ${contadorX} voto(s).\nCandidato Y = ${contadorY} voto(s).\nCandidato Z = ${contadorZ} voto(s).\nVotos em branco = ${contador0} voto(s).\nVotos nulos = ${contadorNulo}`);
            console.log('*-*-*-*-*-*-*-*-*-*-*-*-*');
        } else if(continuarVotacao == 1) {
            continuar = true;
        }
}


