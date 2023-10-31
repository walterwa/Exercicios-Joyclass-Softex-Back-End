let predio = [
    [2, 4, 3, 1], //Moradores no 1º andar: apartamentos 1, 2, 3 e 4
    [3, 2, 2, 3], //Moradores no 2º andar: apartamentos 1, 2, 3 e 4
    [1, 1, 2, 2], //Moradores no 3º andar: apartamentos 1, 2, 3 e 4
    [4, 2, 3, 4], //Moradores no 4º andar: apartamentos 1, 2, 3 e 4
];

//Função para exibir a quantidade de moradores em cada apartamento
function exibirMoradores() {
    for(let andar = 0; andar < predio.length; andar++) {
        for(let apartamento = 0; apartamento < predio[andar].length; apartamento++) {
            console.log(`Andar ${andar + 1}, Apartamento ${apartamento + 1}: ${predio[andar][apartamento]} moradores(as)`);
        }
    }
}

console.log(predio.length);

//chamando a função
exibirMoradores();