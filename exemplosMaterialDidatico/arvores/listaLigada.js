//cópia do código do material didático
//QUEBRADO, não funciona

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
    GetContador() {
        return this.count;
    }

    //Inserção no Início (push)
    addFirst(Nome) {
        const newNo = new No(Nome);
        newNo.proximo = this.cabeca;
        this.cabeca = newNo;
    }
    
    //Inserção no fim
    addLast(Nome) {
        const newNo = new No(Nome);
        if(!this.cabeca) {
            this.cabeca = newNo;
        } else {
            let current = this.cabeca;
            while (current.proximo) {
                current = current.proximo;
            }
            current.proximo = newNo;
        }
    }

    //Remoção no início (pop)
    removeFirst() {
        if(!this.cabeca) {
            return null;
        }
        const removedNo = this.cabeca;
        this.cabeca = this.cabeca.proximo;
        removedNo.proximo = null;
        return removedNo.Nome;
    }

    //Remoção no fim
    removeLast() {
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

    //Busca (search)
    search(Nome) {
        let current = this.cabeca;
        while (current) {
            if(current.Nome === Nome) {
                return current;
            }
            current = current.proximo;
        }
        return null;
    }

    //Método Size
    size() {
        let count = 0;
        let current = this.cabeca;
        while(current) {
            count++;
            current = current.proximo;
        }
        return count;
    }

    //Mostrar tudo:
    mostrarTudo() {
        if(this.cabeca) {
            let arr = [];
            let current = this.cabeca;
            for(let i=0; i < this.count; i++) {
                arr[i] = current.data; 
                current = current.proximo;
            }
            return arr;
        } else {
            return null;
        }
    }
}


let listaExercicio = new ListaLigada();
listaExercicio.addFirst('Fulano');
listaExercicio.addFirst('Ciclano');
listaExercicio.addFirst('Beltrano');
listaExercicio.addFirst('Ultrano');
console.log(listaExercicio.mostrarTudo());


