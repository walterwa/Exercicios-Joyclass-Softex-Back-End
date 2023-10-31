//Função que realiza a busca binária em um array ordenado
function buscaBinaria(array, elementoBuscado) {
    let inicio = 0;
    let fim = array.length - 1;
    while (inicio <= fim) {
        //calcula o índice do meio da coleção
        const meio = Math.floor((inicio + fim) / 2);

        //Verifica se o elemento do meio é igual ao elemento buscado
        if (array[meio] === elementoBuscado) {
            //retorna o índice onde o elemento foi encontrado
            return meio;
        }
        //Se o elemento do meio for maior que o elemento buscado,
        //descarta a metade à direita
        if (array[meio] > elementoBuscado) {
            fim = meio - 1;
        } else {
            //caso contrário, descarta a metade à esquerda
            inicio = meio + 1;
        }
    }
    // Caso o elemento não seja encontrado, retorna -1
    return -1;
}

//Exemplos de uso da busca binária
const listaNumerosOrdenada = [10, 20, 30, 40, 50];
const elementoProcurado = 30;
const indiceEncontrado = buscaBinaria(listaNumerosOrdenada, elementoProcurado);
if(indiceEncontrado !== -1) {
    console.log(`O elemento ${elementoProcurado} foi encontrado no índice ${indiceEncontrado}.`);
} else {
    console.log(`O elemento ${elementoProcurado} não foi encontrado no índice ${indiceEncontrado}.`);
}