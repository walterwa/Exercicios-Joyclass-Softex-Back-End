function Banco(conta, saldo, tipo) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipo = tipo;
    mostrarSaldo = function SaldoValor(){
        console.log(this.saldo)
    }
    
}

let minhaConta = new Banco('5512', 1000000.0, "contacorrente")
