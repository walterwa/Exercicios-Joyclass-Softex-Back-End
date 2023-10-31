//Inicaliza uma fila vazia
const fila = [10, 20, 30];

//Frente (front): obter o elemento que está na frente da fila
function frente() {
    if(fila == []) {
        return null; //Retorna null se a fila estiver fazia
    }
    return fila[0];
}

//chamando a função
console.log(`Número de frente(front): `, frente());

//saída final
console.log("Situação atual da fila: ", fila);

//Tamanho (size)> obter o número total de elementos na fila
function tamanho() {
    return fila.length;
}

//Chamando a função tamanho: 
console.log(`Tamanho da fila: ${tamanho()}`);

//verificar se a fila está vazia
function estaVazia() {
    return fila.length === 0;
}

//chamando a função para verificar se a fila está vazia
console.log(`A fila está vazia? ${estaVazia()}`);