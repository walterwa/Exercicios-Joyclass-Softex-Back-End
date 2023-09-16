class Carro {
    modelo;
    ano;
    #privateKm=0.001;
    #privateCor;
    acelerar(){
        //TO-DO
    }
    #privateFrear(){
        console.log('método private frear!')
    }
    #privateEstacionar(){
        //TO-DO
    }
}

let carro1 = new Carro();
//carro1.privateFrear() //erro
console.log(carro1.privateKm) //resultado = undefined