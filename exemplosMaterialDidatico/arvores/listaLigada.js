function ListaLigada() {

    let head = null;
    let length = 0;

    const Node = (value) => {
        return {
            value,
            next: null
        }
    }
    
    const adicionar = (value) => {
        if(!head) {
            head = Node (value);
            length++;
            return head
        }
        let node = head;
        while(node.next) {
            node = node.next
        }
        node.next = Node(value);
        length++;
        return node.next
    }

    
    return {
        length: () => length,
        adicionar: (value) => adicionar(value),
        print: ()=> console.log(head)
    }
}

const lista = ListaLigada();
console.log(lista.length());
lista.adicionar(['João', 46]);
lista.adicionar(['Maria', 45]);
lista.adicionar(['Anderson', 25]);
lista.adicionar(['Betânia', 19]);
lista.print();