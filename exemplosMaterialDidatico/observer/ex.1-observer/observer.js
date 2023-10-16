//interface de exemplo da Refactoring GURU
//gerenciamento de inscritos
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.observers = [];
    }
    ConcreteSubject.prototype.attach = function (observer) {
        var isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    };
    ConcreteSubject.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    };
    ConcreteSubject.prototype.notify = function () {
        console.log('Subject: Notifying observers...');
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    ConcreteSubject.prototype.someBussinessLogic = function () {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() + (10 + 1));
        console.log("Subject: My state has just changed to: ".concat(this.state));
        this.notify();
    };
    return ConcreteSubject;
}());
var ConcreteObserverA = /** @class */ (function () {
    function ConcreteObserverA() {
    }
    ConcreteObserverA.prototype.update = function (subject) {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserevrA: Reacted to the event.');
        }
    };
    return ConcreteObserverA;
}());
var ConcreteObserverB = /** @class */ (function () {
    function ConcreteObserverB() {
    }
    ConcreteObserverB.prototype.update = function (subject) {
        if (subject instanceof ConcreteSubject && (subject.state === 0)) {
            console.log('ConcreteObserevrB: Reacted to the event.');
        }
    };
    return ConcreteObserverB;
}());
/*Código do cliente, acionando as classes e interface*/
var subject = new ConcreteSubject();
var observer1 = new ConcreteObserverA();
subject.attach(observer1);
var observer2 = new ConcreteObserverA();
subject.attach(observer2);
subject.someBussinessLogic();
subject.someBussinessLogic();
subject.detach(observer2);
subject.someBussinessLogic();
