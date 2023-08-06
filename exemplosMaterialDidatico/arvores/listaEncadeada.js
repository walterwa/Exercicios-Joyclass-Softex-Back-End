class No {
    constructor(Nome) {
        this.Nome = Nome;
        this.proximo = null;
    }
}

class ListaLigada {
    constructor() {
        this.cabeca = null;
    }

    //Inserção no início (push)
    addFirst(Nome) {
        const newNo = new No(Nome);
        newNo.proximo = this.cabeca;
        this.cabeca = newNo;
    }

    addLast(Nome) {
        const newNo = new No(Nome);
        if(!this.cabeca) {
            this.cabeca = newNo;
        } else {
            let current = this.cabeca;
            while(current.proximo) {
                current = current.proximo;
            }
            current.proximo = newNo;
        }
    }

    removeFirst() {
        if(!this.cabeca) {
            return null;
        }
        const removedNo = this.cabeca;
        this.cabeca = this.cabeca.proximo;
        removedNo.proximo = null;
        return removedNo.Nome;
    }

    removeLast(){
        if(!this.cabeca) {
            return null;
        }
        if(!this.cabeca.proximo) {
            const removedNo = this.cabeca;
            this.cabeca = null;
            return removedNo.Nome;
        }
        let current = this.cabeca;
        let previous = null;
        while (current.proximo) {
            previous = current;
            current = current.proximo;
        }
        previous.proximo = null;
        return current.Nome;
    }

    search(Nome) {
        let current = this.cabeca;
        while(current) {
            if(current.Nome === Nome) {
                return current;
            }
            current = current.proximo;
        }
        return null;
    }

    size(){
        let count = 0;
        let current = this.cabeca;
        while(current) {
            count++;
            current = current.proximo;
        }
        return count;
    }

    printList(){}
}