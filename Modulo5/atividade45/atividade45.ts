/*Interface Strategy com método abstrato execute()
- implementar 3 classes concretas para operações de Soma, Subtração e Multiplicação
- o método execute() recebe dois números inteiros como parâmetro e retorna o resultado como número inteiro
- como input do usuário, a aplicação recebe um valor e depois outro valor e a operação que o usuário deseja fazer
- a aplicação deve definir a strategy que será usada com base na operação informada e imprimir o resultado da operação
*/

import * as readline from 'readline';

const inputValor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface Calculadora {
   execute(numero1: number, numero2: number): number;
}



//passar os valores e operadores via input
class Soma implements Calculadora{
    execute(numero1, numero2) {
        return numero1 + numero2;
    }
}

class Subtracao implements Calculadora {
    execute(numero1, numero2) {
        return numero1 - numero2;
    }
}

class Multiplicacao implements Calculadora {
    execute(numero1, numero2) {
        return numero1 * numero2;
    }
}

class Divisao implements Calculadora {
    execute(numero1, numero2) {
        return numero1 / numero2;
    }
}

//testes
// const soma1 = new Soma;
// const subtracao1 = new Subtracao;
// const multiplicacao1 = new Multiplicacao;
// const divisao1 = new Divisao;

async function acionaCalculadora() {
    try {
        let numero1 = parseFloat(await new Promise<string>((resolve) => {
            inputValor.question("Digite o primeiro valor: ", (answer) => {
                resolve(answer);
            });
        }));

        let operador = await new Promise<string>((resolve) => {
            inputValor.question("Digite um operador (+, -, *, /): ", (answer) => {
                resolve(answer);
            });
        });

        let numero2 = parseFloat(await new Promise<string>((resolve) => {
            inputValor.question("Digite o segundo número: ", (answer) => {
                resolve(answer);
            })
        }));

        switch (operador) {
            case '+':
                const soma1 = new Soma();
                console.log(`${numero1} ${operador} ${numero2} = `);
                console.log(soma1.execute(numero1,numero2));
                break;
            case '-':
                const subtracao1 = new Subtracao();
                console.log(`${numero1} ${operador} ${numero2} = `);
                console.log(subtracao1.execute(numero1,numero2));
                break;
            case '*':
                const multiplicacao1 = new Multiplicacao();
                console.log(`${numero1} ${operador} ${numero2} = `);
                console.log(multiplicacao1.execute(numero1,numero2));
                break;
            case '/':
                const divisao1 = new Multiplicacao();
                console.log(`${numero1} ${operador} ${numero2} = `);
                console.log(divisao1.execute(numero1,numero2));
                break;
            default:
                console.log("Operador inválido.");
        }
    } finally {
        console.log(`Fim da operação`);
        inputValor.close()
    }
}

console.log(acionaCalculadora());
//console.log(soma1.execute(2,2))


export default Calculadora;