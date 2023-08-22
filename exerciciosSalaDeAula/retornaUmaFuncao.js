function retornaUmaFuncao() {
    function bomDia() {
        return "bom dia"
    };
    return bomDia;
}

//Retornando uma função a partir de uma função
console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao('oi'));