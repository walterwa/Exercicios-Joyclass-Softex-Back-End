//Objeto com interface original

const objetoOriginal = {
    metodoOriginal: function() {
        console.log('Método original sendo chamado')
    },
};

//Adaptador para interface desejada
const adaptador = {
    novoMetodo: function() {
        console.log('Método adaptado chamado');
        objetoOriginal.metodoOriginal();
    },
}

//usando o método adaptador
adaptador.novoMetodo();