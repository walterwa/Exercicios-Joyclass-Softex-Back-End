class No {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class ListaLigada {
    constructor(head = null) {
        this.head = head
    }
    tamanho() {
        let count = 0;
        let node = this.head;
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }

    limpar() {
        this.head = null;
    }
    getUltimo() {
        let ultimoNo = this.head;
        if(ultimoNo) {
            while(ultimoNo.next) {
                ultimoNo = ultimoNo.next
            }
        }
        return ultimoNo
    }
    getPrimeiro() {
        return this.head;
    }
}

let no1 = new No(['João', 30]);
let no2 = new No(['Pâmela', 31]);
let no3 = new No(['Clarice', 10])

no1.next = no2;
no2.next = no3;

let lista = new ListaLigada(no1);

//console.log(lista.head.next.data);
console.log(lista);
console.log(`Primeiro nó: `, lista.getPrimeiro());
console.log(`Último nó: `, lista.getUltimo());