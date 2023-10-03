let resultado = 1;
console.log("Valor decalarado de resultado: " + resultado);


function adaptadorAssincronoParaSincrono(funcaoAssincrona) {
    return function() {
        return funcaoAssincrona().then((resultado) => {
            resultado = 2
            return resultado;
        });
    };
}

//usando o adaptador

const funcaoAssincrona = async() => {
    //simulando uma operação assíncrona
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return "Dados assíncronos";
};

const funcaoSincrona = adaptadorAssincronoParaSincrono(funcaoAssincrona);

funcaoSincrona().then((resultado) => {
    console.log(resultado);
})

