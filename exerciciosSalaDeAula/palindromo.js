//verificar palindromos
//código professor Rafael Roque

const prompt = require("prompt-sync")({ sigint: true });


function Palindromo(str) {
    //Remover caracteres especiais, como espaços e converter as letras em minúsucas
    let cleanedStr = str.replace("/[^a-zA-Z0-9]+/g,").toLowerCase();

    //inverter a string
    let reversedStr = cleanedStr.split(").reverse().join(");

    //compara a string original com a invertida
    return cleanedStr === reversedStr
}

let palavra = prompt("Digite uma palavra: ")

if(Palindromo(palavra)) {
    console.log(palavra + " é um palíndromo!");
} else {
    console.log(palavra + " não é um palíndromo!");
}