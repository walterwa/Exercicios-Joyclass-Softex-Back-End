-- Colunas
--  ProdutoID (PK), nomeProduto, preco, qtdEstoque

-- Com a tabela já criada, devemos fazer os seguintes passos:
-- 1. INSERT 
-- a) produto 1: Nome - "Smartphone", Preço - 799.99, Quantidade - 20 unidades em estoque
-- b) produto 2: Nome - "Tablet", Preço - 349.99, Quantidade - 10 unidades em estoque
-- c) produto 3: Nome - "Fone de Ouvido", Preço - 49.99, Quantidade - 50 unidades em estoque

-- 2. UPDATE
-- a) atualize o estoque do "Smartphone" para 25 unidades e o preço para 849.99 na tabela "Produtos."

-- 3.DELETE 
-- a) simule a venda de cinco unidades do "Tablet"
-- b) dez unidades do "Fone de Ouvido." 
-- Atualize o estoque na tabela "Produtos" de acordo com as vendas.


CREATE DATABASE estoqueDB;

USE estoqueDB;

CREATE TABLE produtos (
    produtoID INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nomeProduto VARCHAR(50) NOT NULL,
    preco INT(50) NOT NULL,
    qtdEstoque INT(10) NOT NULL
);

INSERT INTO produtos (produtoID, nomeProduto, preco, qtdEstoque)
VALUES
    (1, 'Smartphone', 799.99, 20),
    (2, 'Tablet', 349.99, 10),
    (3, 'Fone de Ouvido', 49.99, 50);

SELECT * FROM produtos;

UPDATE produtos
SET preco=849.99, qtdEstoque=25
WHERE produtoID=1;

UPDATE produtos
SET qtdEstoque=5
WHERE produtoID=2;

UPDATE produtos 
SET qtdEstoque=40
WHERE produtoID=3;
