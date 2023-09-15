/*Com base no que estudamos, escolha dois objetos materiais 
e dois abstratos. Em seguida, faça uma lista com, pelo menos,
 três atributos e três métodos para cada tipo de objeto. 
 Para finalizar, demonstre esses objetos em JavaScript 
 e exemplifique as suas características e ações.*/

 //Materiais carro e moto

 //tocador de música e conta bancária

 class Carro {
   constructor(marca, modelo, ano, preco) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.preco = preco;
   }

    //metodos acelerar, freiar, buzinar
    ligar = function() {
      return `Ligando o carro...`

    }
    acelerar = function() {
      return `Acelerar...`
    }
    frear = function() {
      return `Frear...`
    }
 };

 const carro1 = new Carro("Honda", "Civic", 2020, 100.000);

console.log(`Carro: ${carro1.marca}\nModelo: ${carro1.modelo} \nAno: ${carro1.ano} \nPreço: ${carro1.preco}`)
console.log(carro1.ligar());
console.log(carro1.acelerar());
console.log(carro1.frear());

console.log('\n')

class Computador {
   constructor(marca, modelo, preco) {
      this.marca = marca;
      this.modelo = modelo;
      this.preco = preco;
     } 
      //metodos acelerar, freiar, buzinar
        ligar = function() {
         return `Ligou...`
         
        }
        internet = function() {
           return `Acessou a internet...`
        }
        desligr = function() {
           return `Desligou...`
        }  
  }

  const computador1 = new Computador('Razer', 'RZ44', 5000)
console.log(`Marca: ${computador1.marca}\nModelo: ${computador1.modelo} \nPreço: ${computador1.preco}}`)
console.log(computador1.ligar())

 class Cachorro {
    constructor(raca, nome, idade, peso) {
       this.raca = raca;
       this.idade = idade;
       this.peso = peso;
       this.nome = nome;
      } 
       //metodos acelerar, freiar, buzinar
       latir = function() {
          return `Latiu...`
          
         }
         andar = function() {
            return `Andou...`
         }
         comer = function() {
            return `Comeu...`
         }
      
   }

 const cachorro1 = new Cachorro("Boxer", "Scooby", 9, 32)
 console.log(`Raça: ${cachorro1.raca}\nNome: ${cachorro1.nome} \nIdade: ${cachorro1.idade} \nPeso: ${cachorro1.peso}`)
 console.log(cachorro1.latir())

 console.log('\n')
 
 class Passaro {
   constructor(tipo, nome, idade, cor) {
      this.tipo = tipo;
      this.nome = nome;
      this.idade = idade;
      this.cor = cor;
     } 
      //metodos acelerar, freiar, buzinar
      pousar = function() {
         return `Pousou...`
         
        }
        voar = function() {
           return `Voou...`
        }
        comer = function() {
           return `Comeu...`
        }
     
  }

const papagaio1 = new Passaro("Jandaia", "Zeca", 5, "Azul")
console.log(`Tipo: ${papagaio1.tipo}\nNome: ${papagaio1.nome} \nIdade: ${papagaio1.idade} \nCor: ${papagaio1.cor}`)
console.log(papagaio1.voar())






 