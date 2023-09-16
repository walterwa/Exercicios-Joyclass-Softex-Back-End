/*Código com classe e método estático*/

class ClasseMetodoEstatico {
    static propriedadeEstatica = 'BX48'
    static metodoEstatico() {
        return `Método estático acionado`
    }
    static {
        console.log(`Classe estática inicializada!`)
    }
}

console.log(ClasseMetodoEstatico.propriedadeEstatica)
console.log(ClasseMetodoEstatico.metodoEstatico())