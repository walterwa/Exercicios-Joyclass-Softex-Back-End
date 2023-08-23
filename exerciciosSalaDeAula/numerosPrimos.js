//veificar números primos

/*Para saber se um número é primo, dividimos esse número pelos números primos 2, 3, 5, 7, 11, etc, 
até que tenhamos:
- ou uma divisão com resto zero (e neste caso o número não é primo),
- ou uma divisão com quociente menor que o divisor e o resto diferente de zero. Neste caso o número é primo. */



function numeroPrimo(numero) {
    let inicio = 2;
    while (inicio <= Math.sqrt(numero)) if (numero % inicio++ < 1) return false;
    return numero > 1
}

//console.log(numeroPrimo(3))
console.log(numeroPrimo(4))
console.log(numeroPrimo(5))
console.log(numeroPrimo(7))
console.log(numeroPrimo(8))


//Referências da resposta
//https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript?noredirect=1&lq=1
//https://stackoverflow.com/questions/17389350/prime-numbers-javascript/17390131#17390131
//https://pt.stackoverflow.com/questions/57579/fun%c3%a7%c3%a3o-para-checar-se-n%c3%bamero-%c3%a9-primo-em-javascript/57584#57584