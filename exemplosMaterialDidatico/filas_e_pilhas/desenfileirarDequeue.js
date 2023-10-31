//Inicializando uma fila
const fila = [10, 20, 30];


//Desenfileirar (Dequeue):
//Remove o elemento que está 'na frente' da fila

function desenfileirar() {
    if(fila == []) {
        return null;
    }
    return fila.shift();
}

desenfileirar();
//saída: tamanho da fila após desenfileirar 2
console.log("Fila após desenfileirar: ", fila);