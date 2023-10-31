const pilha = [10, 20, 30];

//Topo (top) para obter o elemento que está no topo da ilha,
// sem removê-lo
function topo() {
    if(pilha == []){
        return null;
    }
    return pilha[pilha.length -1];
}

//Saída: topo da pilha:
console.log(topo());