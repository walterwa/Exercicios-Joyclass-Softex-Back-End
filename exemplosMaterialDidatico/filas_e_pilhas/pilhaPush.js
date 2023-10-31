//inicializando uma pilha vazia
const pilha = [];

//Empilhar (push): adicionar um novo elemento ao topo da pilha
function empilhar(elemento) {
    pilha.push(elemento);
}

//Exemplo de uso das operações de pilha
empilhar(10);
empilhar(20);
empilhar(15);

console.log(pilha);