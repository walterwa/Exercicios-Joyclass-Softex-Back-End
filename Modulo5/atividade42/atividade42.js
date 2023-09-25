/*Fábrica de veículos com o padrão Prototype

- implementar uma classe abstrata veículo com construtor padrão e os métodos clone e represent
- construtor veiculo deve receber modelo, marca, cor e númeroRodas como parâmetros
- ao menos duas subclasses da classe veículo, que acrescentem 1 ou mais atributos, como por ex:
    carro que tem 2 campos a mais como: número de portas etc
- classe Aplicação deve criar um array com 6 veículos com 2 tipos diferentes (subclasses),
    utilizando o método clone dos objetos para preencher o array
- na classe Aplicação, implementar um método que retorne um array com o mesmo tamanho do array de veículos,
    sendo cada um deles um clone dos elementos do array veículos
- no final, imprimir na tela o retorno da função represent de cada elemento desse novo array de clone de veículos*/


class Veiculo {
    constructor(modelo, marca, cor, numeroRodas, ano) {
        this._modelo = modelo;
        this._marca = marca;
        this._cor = cor;
        this._numeroRodas = numeroRodas;
        this._ano = ano
    }
    represent() {
        return `Modelo: ${this._modelo}\nMarca: ${this._marca}\nCor:${this._cor}\nNúmero de Rodas: ${this._numeroRodas}\nAno: ${this._ano}`;
    }
    clone() {
        return new Veiculo(this._modelo, this._marca, this._cor, this._numeroRodas, this._ano)
    }
}


class categoriaVeiculo extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, ano, categoria, combustivel) {
        super(modelo, marca, cor, numeroRodas, ano); 
            this._categoria = categoria;
            this._combustivel = combustivel;
    }

    representCV() {
        return this.represent()+`\nCategoria: ${this._categoria}\nCombustível: ${this._combustivel}`;
    }
}


class eletricoVeiculo extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, ano, numeroPortas, autonomiaBateria) {
        super(modelo, marca, cor, numeroRodas, ano);
        this._numeroPortas = numeroPortas;
        this._autonomiaBateria = autonomiaBateria;
    }
    representEV() {
        return this.represent() + `\nNúmero de portas: ${this._numeroPortas}\nAutonomia da Bateria: ${this._autonomiaBateria}Km`
    }
}

class Aplicacao {
    constructor() {
        this.listaVeiculos = new Array();
        this.listaClones = new Array();
    }

    addVeiculo() {
        this.listaVeiculos.push(new Veiculo("Civic", "Honda", "Branco", 4, 2023))
        this.listaVeiculos.push(new categoriaVeiculo("Fazer CC 350", "Yamaha", "Preto", 6, 2023, "Motocicleta", "Flex"))
        this.listaVeiculos.push(new categoriaVeiculo("S-Sleeper Perfil Alto", "Scania", "Vermelho", 2, 2023, "Carga", "Diesel"))
        this.listaVeiculos.push(new eletricoVeiculo("Seal", "Byd", "Prata", 4, 2021, 4, "372"))
        this.listaVeiculos.push(new Veiculo("Chevette", "Chevrolet", "Azul", 4, 1986))
        this.listaVeiculos.push(new categoriaVeiculo("Biz 125", "Honda", "Cinza", 2, 2010, "Motocicleta", "Gasolina"))
        this.listaVeiculos.push(new eletricoVeiculo("Seal", "Byd", "Prata", 4, 2021, 4, "372"))
    }

    cloneVeiculo() {
        let listaClones = this.listaVeiculos.slice();
        // console.log(`Essa é a lista de clone veicular: \n ${listaClones}`)
        return listaClones
    }
}


let novaAplicacao = new Aplicacao();
novaAplicacao.addVeiculo();
console.log(novaAplicacao.listaVeiculos)
console.log('-----------------******-------------------------------\nLista Clone de Veículos:')
novaAplicacao.cloneVeiculo()
console.log(novaAplicacao.cloneVeiculo());

