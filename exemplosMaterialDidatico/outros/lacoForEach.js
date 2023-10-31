let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//percorrendo a matriz: resultado 1 até 9
console.log('Percorrendo toda a matriz e seus itens de uma única vez: ')
 matriz.forEach(row => {
     row.forEach(element => {
         console.log(element);
     })
});

//imprime cada uma das 3 linhas: 
//[1, 2, 3],
//[4, 5, 6],
//[7, 8, 9]

console.log('Percorrendo cada linha da matriz e imprimindo com seus valores: ')

matriz.forEach(element => {
        console.log(element);
    });