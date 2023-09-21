/*criar situação matemática na qual os números são informados pelo usuário.
Deve ocorrer uma exeção dentro do código.
Devemos utilzar os métodos try, catch e finally para realizar a captura
e o tratamento*/

const prompt = require('prompt-sync')()

function tipoDeValor() {
    const valorDigitado = prompt('Digite um valor: ');
    
    try {
        //let valorDigitadoNumero = Number(valorDigitado);
            if(valorDigitado %2 == 0) {
                throw `PAR`
            }
            if (valorDigitado %2 == 1) { 
                throw `ÍMPAR`
            } 
            if(isNaN(valorDigitado)) {
                throw `String`;
            }
    } catch(err) {
            console.log(`\nValor recebido é: ` + err)
    } finally {
        console.log(`\nVocê digitou: ${valorDigitado}`)
        console.log(`Fim do programa!`)
    }
    
}
tipoDeValor()