function buscaSequencial(umVetor, item) {
    let posicao = 0;
    let achouItem = false;

    while(posicao < umVetor.length && !achouItem) {
        if(umVetor[posicao] === item) {
            achouItem = true;
            console.log(`Item encontrado na posição ${posicao}`)
        }
        else {
            posicao = posicao + 1;
        }
    }
    return achouItem;
}

umVetor =  [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
buscaSequencial(umVetor, 20);