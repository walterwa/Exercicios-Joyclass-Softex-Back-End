import express, { json } from "express";
import mysql from "mysql2";


const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "umaSenhaQualquer" //add senha correta antes de rodar o código
    database: "hotel"
})

const app = express();

app.use(json());

//Consulta no Banco de Dados via BackEnd.
app.get('/funcionario', (req, res) => {
    
    const consulta = "SELECT funcionario.nome, funcionario.cargo FROM hotel.funcionario;";

    conexao.query(consulta, (err, resultado) => {
        if(err){
            console.log(err);
            res.status(404).json({'erro': err})
        } else {
            res.status(200).json(resultado)
        }
    })
})

//Inserir dados com o POST

app.post('/cadastrar', (req, res) => {
    
    const dados = req.body;
    const sql = "INSERT INTO hotel.funcionario SET ?;"
    conexao.query(sql, dados, (err, resultado) => {
        if(err) {
            console.log(err)
            res.status(400).json({'erro': err});
        } else {
            res.status(201).json(resultado);
        }
    })
})

//SELECT via ID (Chave primária)
app.get('/funcionario/:id', (req, res) => {

    const id = req.params.id;
    const sql = "SELECT * FROM hotel.funcionario WHERE idfuncionario =?;"
    conexao.query(sql,id, (err, resultado) => {
        if(err) {
            console.log(err);
            res.status(404).json({'erro': err})
        } else {
            res.status(200).json(resultado);
        }
    })
})

//Alterando o funcionário

app.put('/alterar/:id', (req, res) => {

    const id = req.params.id;
    const dados = req.body;
    const sql = "UPDATE funcionario SET ? WHERE idfuncionario =?;"
    conexao.query(sql,[dados,id], (err, resultado) => {
        if(err) {
            console.log(err); //não localizado
            res.status(404).json({'erro': err});
        } else {
            res.status(200).json(resultado);
        }
    })
});

//DELETE
//buscar pelo índice e deletar

app.delete('/excluir/:id', (req, res) => {

    const id = req.params.id;
    const sql = "DELETE FROM hotel.funcionario WHERE idfuncionario=?;"
    conexao.query(sql, id, (err, resultado) => {
        if(err) {
            console.log(err);
            res.status(404).json({'erro': err});
        } else {
            res.status(201).json(resultado)
        }
    })
})

app.listen(3000, () => {
    console.log('Funcionou!');
})
