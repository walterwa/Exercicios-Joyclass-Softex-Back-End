function buscaSequencial(umVetor, item) {
    let posicao = 0;
    let achouItem = false;

    while(posicao < umVetor.length && !achouItem) {
        if(umVetor[posicao] === item) {
            achouItem = true;
        }
        else {
            posicao = posicao + 1;
        }
    }
    return achouItem;
}

/*
function buscaSequencial(umVetor, item){
    let pos = 0;
    let achou = false;
    while(pos < umVetor.length && !achou){
        if (umVetor[pos] === item){
            achou = true;
        }
        else{
            pos = pos+1;
        }
    }
    return achou;
}
*/

umVetor =  [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
console.log(buscaSequencial(umVetor, 20));