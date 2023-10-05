"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//server
const server = (0, express_1.default)();
server.use(express_1.default.json());
//Porta do servidor
const porta = 8081;
const urlLocalHost = `http://localhost:`;
const alunos = [
    { idAluno: 1, nome: "André Ribeiro", email: 'andre@email.com' },
    { idAluno: 2, nome: "Helena Lima", email: 'helena@email.com' },
    { idAluno: 3, nome: "Fernanda Pereira", email: 'fernanda@email.com' }
];
//Rotas
//GET
server.get('/', (req, res) => {
    res.send(alunos);
});
//POST
server.post('/aluno', (req, res) => {
    try {
        alunos.push(req.body);
        res.status(201).send('Aluno cadastrado com sucesso!');
    }
    catch (err) {
        console.log(err);
    }
});
//buscar índice do aluno
function buscarAlunoPorId(id) {
    return alunos.filter(livro => livro.idAluno = id);
}
function buscarIndiceAluno(id) {
    return alunos.findIndex(aluno => aluno.idAluno == id);
}
//DELETE
//buscar indice do aluno
server.delete('/aluno/:id', (req, res) => {
    let indice = buscarIndiceAluno(Number(req.params.id));
    console.log(indice);
    alunos.splice(indice, 1);
    res.send(alunos);
});
//PUT
//alterar
server.put('/aluno/:id', (req, res) => {
    console.log(req.params.id);
    let indice = buscarIndiceAluno(Number(req.params.id));
    console.log(indice);
    alunos[indice].nome = req.body.nome;
    alunos[indice].email = req.body.email;
    res.json(alunos);
});
server.listen(porta, () => {
    console.log(`Servidor rodando no endereço: ${urlLocalHost}${porta}`);
});
