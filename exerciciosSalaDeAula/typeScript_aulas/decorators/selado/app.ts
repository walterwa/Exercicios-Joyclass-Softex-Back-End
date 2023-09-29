function selado(alvo: any) {
    console.log(alvo)
}

function cor(valor: string) {
    //fábrica de decoradores (decorators factory)
    return function(alvo: any) {
        //decorador que vai executar algo com 'alvo' e 'valor'
    }
}