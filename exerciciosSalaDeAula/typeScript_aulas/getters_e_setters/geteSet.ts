class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;
    private _ID: string;

    public get age() {
        return this._age;
    }

    public get id() {
        return this._ID;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public get firstName() {
        return this._firstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set id(theID: string) {
        this._ID = theID;
    }

    public set firstName(theFirstName: string) {
        this._firstName = theFirstName;
    }

    public set secondName(theLastName: string) {
        this._lastName = theLastName;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}\nID: ${this._ID}`;
    }
}

let person = new Person();
person.age = 10;
person.id = "099.000.111-99"
person.firstName = "Mohamed";
person.secondName = "Salah";

console.log(person);
console.log(person.age); //get age
console.log(person.id); //get id 
console.log(person.firstName); //get first name
console.log(person.lastName); //get last name

console.log('\n');
console.log(person.getFullName());



