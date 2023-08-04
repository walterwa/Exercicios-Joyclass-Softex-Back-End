/* Considere o array [3, 7, 9, 1, 0].
O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.
Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, 
qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando 
o array mencionado?
*/

//1) FILA: shift()
/* A Fila se baseia no princípio FIFO: firs-in-first-out, logo
o primeiro elemento a sair será o primeiro número inserido na fila.
Levando em conta a ordem de inserção, o primeiro a sair é o número 3,
depois 7..9..1..0*/

console.log('Exercício 1) Fila: ')
const fila = [3, 7, 9, 1, 0];

//teste de fila vazia
function estaVazia() {
    return fila.length === 0;
}

//Teste desenfileirar(Dequeue):
function desenfileirar(){
    if(estaVazia()) {
        return null;
    }
    return fila.shift();
}

while(fila.length > 0) {
    console.log(desenfileirar(fila));
} 

console.log(`Situação final da fila: ${fila}`);

//2) LISTA: splice()
/*Na lista podemos inserir na posição que desejamos,
assim como podemos retirar da lista especificando qual a posição
e valor que queremos tirar da lista. Para esvaziá-la totalmente*/

console.log('\nExercício 2) Lista: ')
const lista = [3, 7, 9, 1, 0];

function remover(elemento) {
    const indiceLista = lista.indexOf(elemento);
    if(indiceLista !== -1) {
        lista.splice(indiceLista, 1);
        return true;
    } else {
        return false;
    }
}

remover(3);
console.log(lista);
remover(7);
console.log(lista);
remover(9);
console.log(lista);
remover(1);
console.log(lista);
remover(0);

console.log(`Situação final da lista: ${lista}`); //saída: [7, 9, 1, 0]

//3) Pilha: pop()
/*O sistema de pilhas é LIFO (Last-in-First-Out), o último a entrar, 
é o primeiro a sair. Existem algumas formas de desempilharmos:
podemos fazer com pop (tirando o último elemento) ou via
top (tirando cada elemento do topo da pilha) e seguir até esvaziarmos a pilha*/

console.log('\nExercício 3) Pilha: ');
const pilha = [3, 7, 9, 1, 0];

console.log(`Teste pilha pop: `, pilha.pop());

function pilhaEstaVazia() {
    return pilha.length === 0;
} //retorna false

function desempilharPop() {
    if(pilhaEstaVazia()) {
        return null;
    } else {
        for(let i = 0; pilha.length > 0; i++) {
            console.log(pilha.pop());
         };
    }
}

desempilharPop();
console.log(`Situação final da pilha com POP: ${pilha}`); //retorna []

//remover com shift