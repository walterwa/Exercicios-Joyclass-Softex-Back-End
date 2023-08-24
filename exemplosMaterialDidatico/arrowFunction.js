function parabens(nome) {
    return `Parabéns ${nome}, tudo de melhor para você!`
}

console.log(parabens('Fulano'))

/*Segunda opção*/

const frase2 = (nome) => `\nParabéns ${nome}, tudo de melhor para você!`
console.log(frase2('Beltrano'))

/*ARROW FUNCTION*/
console.log('\nARROW FUNCTION: ')
const frase3 = nome => `Parabéns ${nome}, tudo de melhor para você!`
console.log(frase3('Ciclano'))
