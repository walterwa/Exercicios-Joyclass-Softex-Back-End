//Free Code Camp    
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
    getFirst() {
        return this.head;
    }
}


/*Vamos criar uma lista vinculada com a classe 
que acabamos de criar. Primeiro, criamos dois nós 
da lista, node1 e node2, e um ponteiro do nó 1 para o nó 2. */
//let node1 = new ListNode(2)
//let node2 = new ListNode(5)
let node1 = new ListNode(['João', 30]);
let node2 = new ListNode(['Pâmela', 30]);
let node3 = new ListNode(['Clarisse', 10])

node1.next = node2;
node2.next = node3;

//lista vinculada com node1
let list = new LinkedList(node1);

console.log(list.head.next.data);
console.log(list);
console.log(`Primeiro nó: `, list.getFirst());
console.log(`Último nó: `, list.getLast());
