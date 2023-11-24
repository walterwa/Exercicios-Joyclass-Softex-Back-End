-- Criando um DATABASE
CREATE DATABASE transacoesDB;

-- Usando o DATABASE
USE transacoesDB;

-- criando tabela
CREATE TABLE transacoes (
    idTransacao INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    dataTransacao DATE NOT NULL,
    produto VARCHAR(50) NOT NULL,
    idProduto INT(50) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    valor INT NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    instituicao VARCHAR(50) NOT NULL,
    contaRemetente VARCHAR(50) NOT NULL,
    tipoTransacao VARCHAR(50) NOT NULL
);

-- populando os dados
-- Inserindo dados fictícios na tabela de transações
INSERT INTO transacoes (idTransacao, dataTransacao, produto, idProduto, categoria, valor, usuario, instituicao, contaRemetente, tipoTransacao)
VALUES
  (1, '2023-01-01', 'Notebook', 101, 'Informática', 3500.50, 'Ana', 'TuBank', '123-89', 'Debito'),
  (2, '2023-01-02', 'Celular', 102, 'Eletrônicos', 1000.20, 'Bento', 'OxiBank', '1457-79', 'PIX'),
  (3, '2023-01-03', 'Camisa', 103, 'Vestuário', 100.00, 'Thais', 'YTBank', '225-69', 'TED'),
  (4, '2023-01-04', 'Fogão', 107, 'Eletrodomésticos', 890.75, 'Kaynan', 'BB', '024-234', 'DOC'),
  (5, '2023-01-09', 'Panela de Pressão', 406, 'Itens de cozinha', 90.05, 'Amaro', 'Caixa', '7024-534', 'Debito');

-- 1) selecionando todos os dados da tabela transacoes
SELECT * FROM transacoes;

DELETE FROM transacoes WHERE idTransacao = 5;


-- renomeando as colunas
SELECT idTransacao AS ID, dataTransacao AS data_Transacao, valor AS valor_Transacao FROM transacoes;

-- filtro de R$ 100,00
SELECT * FROM transacoes WHERE valor > 80.00;

-- selecionar e ordenar com ORDER BY
SELECT * FROM transacoes ORDER BY valor DESC;

-- agragação
SELECT AVG(valor) as Media, MAX(valor) as valor_Maximo, Min(valor) AS valor_Minimo, COUNT(*) AS total_Transacoes FROM transacoes;

-- agrupamento com GROUP BY
SELECT produto, AVG(valor) AS media_valor_Produto FROM transacoes GROUP BY produto;

-- seleções
SELECT categoria, COUNT(*) as total_Produtos, SUM(valor) as valor_Total_Vendas, AVG(valor) AS media_valor_Transacao
    FROM transacoes
        GROUP BY categoria;

