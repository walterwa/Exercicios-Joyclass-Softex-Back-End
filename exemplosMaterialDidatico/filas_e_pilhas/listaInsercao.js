const lista = [];

//Inserção (Insertion): Adicionar um novo elemento à lista
//em uma posição específica ou no fim da lista
function inserir(elemento, posicao = lista.length) {
    if (posicao >= 0 && posicao <= lista.length) {
    lista.splice(posicao, 0, elemento); //0 representa o número de elementos que devem ser removidos
    return true;
} else {
    return false;
    }
}

//Exemplo de uso das operações da lista
inserir(10);
inserir(20, 0);
inserir(30, 1);
inserir(45, 3);
inserir(78, 6); //não vai inserir, pois 6 é maior que o tamanho da lista
inserir(78); //vai inserir após 45

console.log(lista);