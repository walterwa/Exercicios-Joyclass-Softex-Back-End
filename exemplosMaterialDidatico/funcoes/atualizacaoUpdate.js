const lista = [10, 20, 30];

//Atualizacao (update): modificar o valor de um elemento existente na lista
function atualizar(posicao, novoElemento) {
    if(posicao >= 0 && posicao < lista.length) {
        lista[posicao] = novoElemento;
        return true;
    } else {
        return false;
    }
}

atualizar(2, 40);
console.log(lista); //saida: [10, 20, 40];
atualizar(1, 15); 
console.log(lista); //saida: [10, 15, 40]; ou seja, troca o 20 por 15
atualizar(2, 45);
console.log(lista); //saida: [10, 15, 40]; ou seja, troca o 20 por 15
                    // a lista não cresce mais do que isso, pois inicialmente
                    //foi feita com 3 elementos