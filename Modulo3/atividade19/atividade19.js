/*Nesta atividade, você deve criar um código em JavaScript com 
uma matriz bidimensional para armazenar informações sobre animais 
e as suas características.

Cada linha deve representar um animal e cada coluna terá
as diferentes informações sobre ele, como nome, espécie e idade.
*/

const prompt = require("prompt-sync")({ sigint: true });

let animais = [];

for(let i = 1; i<=3; i++) {
    let nome = prompt(`Digite o nome do animal n. ${i}: `);
    let especie = prompt(`Digite a espécie do animal n. ${i}: `);
    let idade = Number(prompt(`Digite a idade do animal n. ${i}: `));
    animais.push([nome, especie, idade]);
}

//verificando o resultado da matriz
console.log(animais);

console.log("\nApresentação individual dos resultados: ");
for(let i = 0; i < 3; i++){
    let animalNome = animais[i][0];
    let animalEspecie = animais[i][1];
    let animalIdade = animais[i][2];
    console.log(`Nome: ${animalNome}, Espécie: ${animalEspecie}, Idade: ${animalIdade}`);
}