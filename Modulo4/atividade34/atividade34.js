/*implementar uma conexão com um banco de dados. Testar a conexão
devolvendo uma frase positiva caso consigamos implementar.
Caso não consigamos, deve-se voltar uma frase de erro*/

const express = require("express");
const app = express();
const mysql = require('mysql2');

//Credenciais conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', //excluído antes de subir pro github
    database: 'sistemaDeCadastro'
});

//fazendo a conexão
connection.connect( function (err) {
    if(err) {
        console.log("ERRO de conexão com o banco de dados!");
    } else {
        console.log("Conexão com o banco de dados realizada com sucesso!");
    }
});

app.get("/", function(req, res) {
    res.send("Bem vindo sistema.")
});

//parâmetros fixos em rota
app.get("/blog/:artigo?", function(req, res) {
    
    let artigo = req.params.artigo;

    if(artigo) {
        res.send("Artigo: " + artigo)

    } else {
        res.send("Bem vindo ao meu blog!")
    }
});


//query params
app.get("/canal/youtube", function(req, res) {
    let canal = req.query["canal"];
    
    if(canal) {
        res.send(canal)
    } else {
        res.send("Nenhum canal fornecido!")
    }
});

app.get("/ola/:nome/:empresa", function(req, res) {
    let nome = req.params.nome;
    let empresa = req.params.empresa;
    res.send("Oi," + nome + ", da empresa " + empresa)
})

app.listen(4000,function(erro) {
    if(erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})