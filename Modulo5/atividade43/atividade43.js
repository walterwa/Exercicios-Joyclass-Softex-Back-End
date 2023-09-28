/*Aplicar o padrão decorator para criar um sanduíche de frango
assado com pepperoni e queijo mussarela ralado. O projeto precisa ter:

- console.log: Sanduíche de Carne, Bacon, Queijo Mussarela Ralado custa $7,49
- frango custa $4,50
- o pepperoni adicional custa $0,99
- queijo adicional mussarela ralado $2,00
- classes necessárias: frango Assado, Pepperoni e Queijo Mussarela Ralado */

class Sanduiche {
    constructor() {
        this.produto = "Sanduíche";
        this.custo = 0.0;
    }
    getProduto() {
        return this.produto;
    }

    getCusto() {
        return this.custo;
    }
}

class produtoAdicional extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    getProduto() {
        return `${this.sanduiche.getProduto()}, ${this.produto}`
    }

    getCusto() {
        return this.sanduiche.getCusto() + this.custo
    }
}

class FrangoAssado extends Sanduiche {
    constructor() {
        super();
        this.produto = "Frango Assado";
    }
    getProduto() {
        return `${this.produto}`
    }

    getCusto() {
        return 4.50;
    }
}



class Pepperoni extends produtoAdicional {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
        this.produto = "Pepperoni";
    }

    getCusto() {
        return this.sanduiche.getCusto() + 0.99
    }
}

class QueijoMussarelaRalado extends produtoAdicional {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
        this.produto = "Queijo Mussarela Ralado";
    }

    getCusto() {
        return this.sanduiche.getCusto() + 2.0;
    }
}


function fazendoSanduiche() {
    let sanduiche = new FrangoAssado();
    sanduiche = new Pepperoni(sanduiche);
    sanduiche = new QueijoMussarelaRalado(sanduiche);

    console.log(`Sanduíche: ${sanduiche.getProduto()} \nPreço: R$${sanduiche.getCusto()} `)
}

fazendoSanduiche()
