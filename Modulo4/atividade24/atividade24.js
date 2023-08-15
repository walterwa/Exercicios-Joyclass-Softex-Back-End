/*1) Declarar as variáveis e não passar valores*/
let varBoolean;
let varBigInt;
let varString;
let varSymbol;

console.log('Variáveis com Valores undefined: ');
console.log(varBoolean);
console.log(varBigInt);
console.log(varString);
console.log(varSymbol);

/*2) Deixar as variáveis omo Null*/
varBoolean = null;
varBigInt = null;
varString = null;
varSymbol = null;

console.log('\nVariáveis com Valores null: ')
console.log(varBoolean);
console.log(varBigInt);
console.log(varString);
console.log(varSymbol);

/*3) Atribuindo valores para as variáveis */
varBoolean = true;
varBigInt = BigInt(9007199254740991);
varString = 'Essa é uma string'; 
varSymbol = Symbol('ABZ') ;

console.log('\nVariáveis com os respectivos valores: ')
console.log(varBoolean, `| O tipo da variável é ${typeof(varBoolean)}.`);
console.log(varBigInt, `| O tipo da variável é ${typeof(varBigInt)}.`);
console.log(varString, `| O tipo da variável é ${typeof(varString)}.`);
console.log(varSymbol, `| O tipo da variável é ${typeof(varSymbol)}.`);