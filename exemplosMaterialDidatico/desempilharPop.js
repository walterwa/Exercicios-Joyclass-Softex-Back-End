const pilha = [10, 20, 30];

//Desempilhar (pop): remover o elemento que está no topo da pilha
function desempilhar() {
    if(pilha == []) {
        return null;
    }
    return pilha.pop();
}

desempilhar();
console.log(pilha); // saída 10,20