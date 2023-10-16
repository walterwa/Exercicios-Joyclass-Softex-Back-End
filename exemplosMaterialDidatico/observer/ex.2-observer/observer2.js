//Classe Observer concreta
var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(name) {
        this.name = name;
    }
    ConcreteObserver.prototype.update = function (message) {
        console.log("".concat(this.name, " received the message: ").concat(message));
    };
    return ConcreteObserver;
}());
//Classe
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.observers = [];
    }
    ConcreteSubject.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    ConcreteSubject.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    };
    ConcreteSubject.prototype.notifyObservers = function (message) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(message);
        }
    };
    return ConcreteSubject;
}());
//Aplicando
var observer1 = new ConcreteObserver("Observer 1");
var observer2 = new ConcreteObserver("Observer 2");
var subject = new ConcreteSubject();
subject.registerObserver(observer1);
subject.registerObserver(observer2);
subject.notifyObservers("Hello, Observers!");
subject.removeObserver(observer1);
subject.notifyObservers("Observer 1 has been removed");
