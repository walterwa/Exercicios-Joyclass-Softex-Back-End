var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "id", {
        get: function () {
            return this._ID;
        },
        set: function (theID) {
            this._ID = theID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (theFirstName) {
            this._firstName = theFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "secondName", {
        set: function (theLastName) {
            this._lastName = theLastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getFullName = function () {
        return "".concat(this._firstName, " ").concat(this._lastName, "\nID: ").concat(this._ID);
    };
    return Person;
}());
var person = new Person();
person.age = 10;
person.id = "099.000.111-99";
person.firstName = "Mohamed";
person.secondName = "Salah";
console.log(person);
console.log(person.age); //get age
console.log(person.id); //get id 
console.log(person.firstName); //get first name
console.log(person.lastName); //get last name
console.log('\n');
console.log(person.getFullName());
