const lista = [10, 20, 30, 75, 90];

//Busca (Search): procurar um elemento específico na lista e, 
//em caso positivo, retornar sua posição ou referência

function buscar(elemento) {
    const indice = lista.indexOf(elemento);
    if(indice !== -1) {
        return indice;
    } else {
        return null;
    }
}

//Saída: posição do elemento 30: 2
console.log(`Posição do elemento 30: ${buscar(30)}`);
console.log(`Posição do elemento 88: ${buscar(88)}`); //retorna null
