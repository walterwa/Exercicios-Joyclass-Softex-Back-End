class Cafe {
    constructor() {}
        e_quente(temperatura) {
            return temperatura > 50
        }
}
cafe = new Cafe()
console.log(cafe.e_quente(49))
console.log(cafe.e_quente(100))