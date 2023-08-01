/*Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, 
alterando uma cor e uma idade. Ao terminar, imprima novamente todas 
as informações das três listas.
*/

let nomes = ['Antonio Carlos', 'Belchior', 'Cartola', 
'Dua Lipa', 'Elza Soares', 'Fafá de Belém', 'Gal Costa', 'Hermeto Pascoal',
'Itamar Assumpção', 'Juçara Marçal'];

let idades = [59, 71, 72, 28, 92, 67, 77, 87, 54, 61]

let cores = ['preto', 'cinza', 'verde', 'rosa', 'amarelo', 'vermelho', 'roxo',
'azul', 'branco', 'laranja'];

console.log('\nImprimindo a primeira versão:\n ');

for(n = 0; n < nomes.length; n++) {
    console.log(`Nome: ${nomes[n]}, idade:  ${idades[n]}, Cor favorita: ${cores[n]}`);
}

//alteração para o primeiro valor de cada lista
idades[0] = 67;
cores[0] = 'ocre';

//testes de cada lista após as alterações
//console.log(idades);
//console.log(cores);

console.log('\nImprimindo após as alterações:\n ');

for(n = 0; n < nomes.length; n++) {
    console.log(`Nome: ${nomes[n]}, idade:  ${idades[n]}, Cor favorita: ${cores[n]}`);
}