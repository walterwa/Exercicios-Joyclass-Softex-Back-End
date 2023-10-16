//interface de exemplo da Refactoring GURU
 //gerenciamento de inscritos

interface Subject {
    //anexar um observer para um assunto
    attach(observer: Observer): void;

    //desanexar um observer para um assunto
    detach(observer: Observer): void;

    //notificar todos os observer sobre um evento
    notify(): void;
}

class ConcreteSubject implements Subject {
    //variável do tipo número par armazenamento
    //do estado de inscritos.
    public state: number;

    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if(isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if(observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    public notify(): void {
        console.log('Subject: Notifying observers...');
        for(const observer of this.observers) {
            observer.update(this);
        }
    }


    public someBussinessLogic(): void {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() + (10+1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}

/*A interface Observer declara o método de atualização,
usado pelo assunto*/
interface Observer {
    update(Subject: Subject): void;
}

class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
         if(subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserevrA: Reacted to the event.');
         }
    }
}

class ConcreteObserverB implements Observer {
    public update(subject: Subject): void {
         if(subject instanceof ConcreteSubject && (subject.state === 0)) {
            console.log('ConcreteObserevrB: Reacted to the event.');
         }
    }
}


/*Código do cliente, acionando as classes e interface*/

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
subject.attach(observer1);

const observer2 = new ConcreteObserverA();
subject.attach(observer2);

subject.someBussinessLogic();
subject.someBussinessLogic()

subject.detach(observer2);
subject.someBussinessLogic()



