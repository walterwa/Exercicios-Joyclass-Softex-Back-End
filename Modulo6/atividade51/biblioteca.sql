CREATE TABLE Livro 
( 
 ISBN VARCHAR(50) PRIMARY KEY,
 titulo VARCHAR(100) NOT NULL,  
 autor VARCHAR(100),  
 editora VARCHAR(100) NOT NULL,  
 ano INT NOT NULL,  
 genero VARCHAR(100),  
 status INT NOT NULL,
 FOREIGN KEY (autor) REFERENCES Autor(autor)  
); 

CREATE TABLE Autor 
( 
 idAutor INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(100) NOT NULL,  
 nacionalidade INT,  
 anoNascimento INT
); 

CREATE TABLE Usuario 
( 
 cpf VARCHAR(11) PRIMARY KEY,  
 nomeUsuario VARCHAR(100),  
 dataNascimento DATE NOT NULL,  
 endereco VARCHAR(100) NOT NULL,  
 telefone VARCHAR(100) NOT NULL
); 

CREATE TABLE Emprestimo 
( 
 dataEmprestimo INT PRIMARY KEY,  
 dataVencimento INT,  
 cpf VARCHAR(11), 
 FOREIGN KEY (cpf) REFERENCES Usuario(cpf)
); 

CREATE TABLE Devolucao 
( 
 dataDevolucao DATE PRIMARY KEY,  
 dataVencimento INT,  
 ISBN INT,
 FOREIGN KEY (dataVencimento) REFERENCES Emprestimo(dataVencimento),
 FOREIGN KEY (ISBN) REFERENCES Livro(ISBN)
); 
