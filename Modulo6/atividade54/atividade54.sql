-- Considere um banco de dados simples que armazena informações sobre livros e autores. As tabelas relevantes são as seguintes:
-- 1. Tabela "Autores": Colunas: AutorID (Chave Primária), Nome, Nacionalidade
-- 2. Tabela "Livros": Colunas: LivroID (Chave Primária), Titulo, AnoPublicacao, AutorID (Chave Estrangeira referenciando Autores)

-- Instruções: 
-- 1. Inserção de dados: insira alguns registros nas tabelas "Autores" e "Livros". Certifique-se de que existam, pelo menos, três autores e cinco livros associados a esses autores;
-- 2. Consulta simples: realize uma consulta simples para listar todos os autores e seus livros associados;
-- 3. Consulta com junção INNER JOIN: crie uma consulta que utilize INNER JOIN para listar os detalhes dos livros e seus autores correspondentes;
-- 4. Consulta com junção LEFT JOIN: elabore uma consulta que utilize LEFT JOIN para exibir todos os autores, independentemente de terem livros associados. Inclua informações dos livros, se disponíveis;
-- 5. Consulta com filtro por nacionalidade realize uma consulta que liste os autores e seus livros, mas restrinja os resultados apenas aos autores de uma nacionalidade específica;
-- 6. Consulta agregada: crie uma consulta que agregue dados para contar quantos livros cada autor escreveu.

CREATE DATABASE bibliotecaDB;

USE bibliotecaDB;

CREATE TABLE autores (
    autorID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50),
    nacionalidade VARCHAR(50)
);

CREATE TABLE livros (
    livroID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100),
    anoPublicacao INT,
    autorID INT,
    FOREIGN KEY (autorID) REFERENCES autores(autorID)
);

-- 1) 
INSERT INTO autores(nome, nacionalidade) 
    VALUES
	('Cida Pedrosa', 'Brasileira'),
    ('Conceição Evaristo', 'Brasileira'),
    ('Chimamanda Ngozi Adichie', 'Nigeriana'),
    ('Rachel de Queiroz', 'Brasileira'),
    ('Adélia Prado', 'Brasileira');


INSERT INTO livros(titulo, anoPublicacao, autorID)
    VALUES
    ('Araras Vermelhas', 2022, 1),
    ('Solo para Vialejo', 2019, 1),
    ('Ponciá Vicêncio', 2003, 2),
    ('Olhos d`Água', 2014, 2),
    ('Hibisco Roxo', 2011, 3),
    ('O Quinze', 1930, 4);
    
-- 2- Consultas

SELECT * FROM autores;

SELECT * FROM livros;

-- 3- INNER JOIN
SELECT autores.autorID, autores.nome AS nomeAutor, titulo, anoPublicacao AS anoDaPublicacao
FROM livros
INNER JOIN autores ON autores.autorID = livros.autorID;

-- 4- LEFT JOIN
SELECT autores.nome, livros.titulo
FROM autores
LEFT JOIN livros ON autores.autorID = livros.autorID
ORDER BY autores.nome;

-- 5- SELECT com filtro
SELECT * FROM autores
WHERE nacionalidade='Brasileira';

-- SELECT e INNER JOIN Com filtro
SELECT autores.autorID, autores.nome AS nomeAutor, titulo, anoPublicacao AS anoDaPublicacao
FROM livros
INNER JOIN autores ON autores.autorID = livros.autorID
WHERE nacionalidade='Brasileira';

-- 6- Criar uma consulta que conte quantos livros cada autora escreveu
SELECT autores.autorID, autores.nome AS nomeAutora, COUNT(livros.autorID) AS qtdLivros
FROM autores
LEFT JOIN livros ON autores.autorID = livros.autorID
GROUP BY autores.autorID, autores.nome;