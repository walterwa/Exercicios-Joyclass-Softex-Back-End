//Definindo uma interface como Observer
interface Observer {
    update(message: string): void;
}

//Classe Observer concreta
class ConcreteObserver implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(message: string) {
        console.log(`${this.name} received the message: ${message}`);
    }
}

//Subject (Observable) interface
interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(message: string): void;
}

//Classe
class ConcreteSubject implements Subject {
    private observers: Observer[] = [];

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if(index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(message: string): void {
        for(const observer of this.observers) {
            observer.update(message);
        }
    }
}

//Aplicando
const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

const subject = new ConcreteSubject();
subject.registerObserver(observer1);
subject.registerObserver(observer2);

subject.notifyObservers("Hello, Observers!");

subject.removeObserver(observer1);

subject.notifyObservers("Observer 1 has been removed");
