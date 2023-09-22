//Interfaces

interface IsPerson {
    name: string;
    age: number,
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Alguém',
    age: 20,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
};

const greetPerson = (person: IsPerson) => {
    console.log('Hello,', person.name)
}

greetPerson(me);
console.log(me);

let someone: IsPerson; //declarando uma nova pessoa