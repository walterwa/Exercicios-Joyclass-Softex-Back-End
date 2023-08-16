/*Questão: variáveis com nome, salario, idade e se possui diploma.
Devolver os dados e depois certificar-se que o dado passado está correto*/

let nome = String;
let salario = Number;
let idade = Number;
let diploma = Boolean;


nome = "Samantha Kerr";
salario = 20000;
idade = 20;
diploma = true;

//Apresentando os dados
console.log(`Os dados passados foram:\nNome: ${nome}\nSalário: R$${salario}
\nIdade: ${idade}\nPossui diploma: ${diploma ? `Sim` : `Não`}`);

//Verificando os dados
console.log(`\nVerificação dos Tipos de dados:\nNome: ${typeof(nome)}\nSalário: ${typeof(salario)}
\nIdade: ${typeof(idade)}\nPossui diploma: ${typeof(diploma)}`);

