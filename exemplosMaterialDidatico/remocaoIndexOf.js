const lista = [10, 20, 30, 75, 90];

function remover(elemento) {
    const indice = lista.indexOf(elemento);
    if(indice !== -1) {
        lista.splice(indice, 1);
        return true;
    } else {
        return false;
    }
}

remover(30);
console.log(lista);