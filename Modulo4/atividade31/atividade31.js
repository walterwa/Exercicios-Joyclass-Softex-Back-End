/*Crie um código com um objeto chamado Banco
- buscar saldo deve retomar o valor atual do saldo
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do projeto
- para saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto
- o número da conta deve retornar o número da conta
*/


function Banco(conta, saldo, tipo) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipo = tipo;
    this.mostrarSaldo = function() {
        console.log(`Seu saldo é de R$${this.saldo}`)
    };
    this.depositarValor = function(valor) {
        this.saldo += valor;
    };
    this.saque = function(valor){
        this.saldo -= valor;
    }
    this.numeroConta = function() {
        console.log(`Seu número da conta é ${this.conta}`)
    }
}

let conta1 = new Banco("12345", 105.00, "corrente");
//console.log();

conta1.numeroConta()
console.log(`\nDepositando 100: `)
conta1.depositarValor(100)
//console.log(conta1.saldo)
conta1.mostrarSaldo()
console.log(`\nSacando 5: `)
conta1.saque(5)
conta1.mostrarSaldo()
