/*criar uma classe com 2 atributos, usando
.get() e .set() */


class Contato {
    constructor (telefone, email, operadora) {
        this.telefone = telefone,
        this.email = email,
        this.operadora = operadora
    }

    get nomeOperadora() {
        return this.operadora
    }

    set nomeOperadora(nomeOperadora) {
        this.operadora = nomeOperadora;
    }
}

const contato1 = new Contato('81123456789', 'email@email.com', 'AGV');
console.log(contato1.email)
//verificando nome da operadora
console.log(contato1.operadora)

//trocando nome da operadora
contato1.nomeOperadora = "TAG"
console.log(contato1.operadora)




