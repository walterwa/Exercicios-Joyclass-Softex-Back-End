/*Crie um adaptador que permita que um objeto do tipo PATO seja usado 
como se fosse um objeto do tipo Galinha. Siga o exemplo apresentado 
no Hipertexto 4 e crie as classes AdaptadorPato e AdaptadorPatoDemo
para demonstrar o uso da classe AdaptadorPato.

*/

const aves = {
    nome: "Ave",
    criarAve: function () {
        console.log(`Criando ave ${nome}`);
    },
};

class AdaptadorPato {
    constructor(ave) {
        this.ave = ave;
        this.ave.nome = "Pato";
    }
    emitirSom() {
        console.log(`Emitir som: Quack!`)
    }
    toString() {
        console.log(`A ave ${this.ave.nome} foi criada com sucesso`)
    }
}


class AdaptadorPatoDemo {
    constructor(ave, nome) {
        this.ave = ave;
        this.ave.nome = nome;
    }
    emitirSom(som) {
        console.log(`Emitir som: ${som}`)
    }
    toString() {
        console.log(`A ave ${this.ave.nome} foi criada com sucesso`)
    }
}

//Testes
//Pato
const adaptadorPato = new AdaptadorPato(aves);
adaptadorPato.toString();
adaptadorPato.emitirSom();

//galinha
console.log('\n')
const galinha = new AdaptadorPatoDemo(aves, "Galinha");

galinha.toString();
 galinha.emitirSom("Piu");



