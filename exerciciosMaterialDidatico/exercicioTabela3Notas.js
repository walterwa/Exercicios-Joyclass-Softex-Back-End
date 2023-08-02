let nome = ['José', 'Lúcia', 'Pedro'];

let notas = [
    [5.5, 7.9, 7.1],
    [7, 3.5, 9.0],
    [8.6, 7.3, 8.8]
];

i = 0;

console.log(`Apresentando as notas:\n`); 

notas.forEach(row => {
    console.log(nome[i]);
    row.forEach(element => {
        console.log(element);
    });
    i+= 1;
});

//função para calcular média

function calcularMedia(notas) {
    let soma = 0;
    for(let nota of notas) {
        soma += nota;
    }
    return soma/notas.length;
}

let mediaAlunos = []; //novo array para receber as notas 

//chamando for para pegar cada nota dos alunos e tirar a médida, depois add no array
for(let i=0; i< notas.length; i++) {
    let mediaAluno = calcularMedia(notas[i]);
    mediaAlunos.push(mediaAluno);
}

console.log(mediaAlunos);