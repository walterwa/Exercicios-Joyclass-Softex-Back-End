/*Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.
*/

function calculadora(n1, n2, operacao) {
    if (operacao == 0) {
        console.log(0);
    }
    else if (operacao == '+') {
        console.log(n1 + n2);
    }
    else if (operacao == '-') {
        console.log(n1 - n2);
    }
    else if (operacao == '/') {
        console.log(n1 / n2);
    }
    else if (operacao == '*') {
        console.log(n1 * n2);
    }
}

console.log('Exemplo soma: '); calculadora(10, 2, '+');
console.log('Exemplo subtração: '); calculadora(10, 2, '-');
console.log('Exemplo multiplicação: '); calculadora(10, 2, '*');
console.log('Exemplo divisão: '); calculadora(10, 2, '/');
console.log('Exemplo de operador inválido: '), calculadora(10, 2, 0);
