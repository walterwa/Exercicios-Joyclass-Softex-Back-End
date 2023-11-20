import express, { json } from 'express';
import mysql from 'mysql2';
import 'dotenv/config';

//conexão banco de dados

var conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const app = express();

app.use(json());

app.get('/funcionario', (req, res) => {
    
    const consulta = "SELECT funcionario.nome, funcionario.cargo FROM hotel.funcionario;";

    conexao.query(consulta, (erro, resultado) => {
        if(erro) {
            console.log(erro);
            res.status(404).json({'erro': erro});
        } else {
            res.status(200).json(resultado);
        }
    });
})

app.post('/cadastrar', (req,res) => {

    const dados = req.body;
    const sql = "INSERT INTO hotel.funcionario SET ?;"
    conexao.query(sql, dados, (erro, resultado) => {
        if(erro) {
            console.log(erro)
            res.status(400).json({'erro': erro})
        } else {
            res.status(201).json(resultado)
        }
    })
})

//Seleção por ID de funcionário
app.get('/funcionario/:id', (req, res) => {

    const id = req.params.id;
    const sql = "SELECT * FROM hotel.funcionario WHERE idfuncionario =?;";
    conexao.query(sql, id, (erro, resultado) => {
        if(erro){
            console.log(erro);
            res.status(404).json({'erro': erro});
        } else{
            res.status(200).json(resultado);
        }
    })
});

//Alterando o funcionário

app.put('/alterar/:id', (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    const sql = "UPDATE funcionario SET ? WHERE idfuncionario =?;";
    conexao.query(sql, [dados, id], (erro, resultado) => {
        if(erro){
            console.log(erro);
            res.status(404).json({'erro': erro});
        } else{
            res.status(200).json(resultado);
        }
    })
});

//DELETE




app.listen(3000, () => {
    console.log('Funcionou');
})