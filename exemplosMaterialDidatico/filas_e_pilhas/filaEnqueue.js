//inicializando uma fila vazia

const fila = [];

//Enfileirar (Enqueue): Adicionar um elemento ao final da fila
function enfileirar(element) {
    fila.push(element);
}

//Aplicação:
enfileirar(10);
enfileirar(20);
enfileirar(30);
enfileirar(25);

console.log(fila);