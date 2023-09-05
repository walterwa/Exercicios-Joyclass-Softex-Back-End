/*Crie um código JavaScript no back-end utilizando o Node.JS. 
No código, você deverá elaborar uma ou mais rotas, que podem ser 
de qualquer tipo (get, put etc). Depois, faça um teste em aplicações 
de rota, como o Postman ou o Insomnia, para confirmar 
se o retorno está coerente com o que você programou.*/ 


const express = require("express");
const app = express()

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`)
});

app.get("/", (req,res) => {
    res.send(`Hello World! Esse é o meu primeiro exercício de Rotas com NodeJS`);
})