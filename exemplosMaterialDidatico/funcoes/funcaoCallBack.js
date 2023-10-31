/*function print(callback) {
    callback();
}*/

/*função callback com o método setTimeout*/
const mensagem = function() {
    console.log(`Essa mensagem é exibida depois de 3 segundos.`)
}
const fim = function() {
    console.log('Fim do programa após 4 segundos')
}

setTimeout(mensagem, 3000);
setTimeout(fim, 4000);


/*função anônima*/
setTimeout(function () {
    console.log(`Mensagem exibida após 5 segundos`)
}, 5000) 

/*callback com arrow functions */
setTimeout(() => {
    console.log(`Novo programa iniciado após 6 segundos`)
}, 6000)

setTimeout(() => {
    console.log(`Novo programa finalizado após 7 segundos`)
}, 7000)