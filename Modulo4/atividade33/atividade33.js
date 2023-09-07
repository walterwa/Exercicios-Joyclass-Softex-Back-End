/*criar um array de objetos pessoas com pelo menos 4 itens, cada um com 4 propriedades:
nome, idade, profissão e cidade.
Deve-se declarar os objetos pessoas dentro do array e, depois, desenvolver um código que utilize
for in e for of para imprimir todos objetos e propriedades sejam impressos.*/

let pessoas = [ 
    {
        nome: "Adélia Prado",
        idade: 87,
        profissao: "Poetisa",
        cidade: "Divinópolis"
    },
    {
        nome: "Carlos Drummond",
        idade: 60,
        profissao: "Poeta",
        cidade: "Itabira"
    },
    {
        nome: "Clarice Lispector",
        idade: 65,
        profissao: "Escritora",
        cidade: "Tchetchelnik"
    },
    {
        nome: "Miró da Muribeca",
        idade: 55,
        profissao: "Poeta",
        cidade: "Jaboatão dos Guararapes"
    }
]

for (var pessoa in pessoas) {
    console.log(pessoa, pessoas[pessoa])
}

//console.log(pessoas)
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*')
console.log('Versão com for of ')
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*')


for(const pessoa of pessoas) {
   console.log(pessoa) 
}