CREATE DATABASE blogdb;

USE blogdb;

CREATE TABLE Autor (
	autorID int NOT NULL,
	nomeDoAutor varchar(30) NOT NULL,
	email varchar(50) NOT NULL,
	PRIMARY KEY (autorID)
);

CREATE TABLE Post (
	postID int NOT NULL,
	titulo varchar(20) NOT NULL,
	conteudo varchar(250),
	dataDePublicacao date,
	autorID int,
	PRIMARY KEY (postID),
	FOREIGN KEY (autorID) REFERENCES Autor(autorID)
);



CREATE TABLE comentario (
	comentarioID int NOT NULL,
	textoComentario varchar(250),
	dataComentario date,
	autorID int,
	postID int,
	
	PRIMARY KEY (comentarioID),
	FOREIGN KEY (autorID) REFERENCES Autor(autorID),
	FOREIGN KEY (postID) REFERENCES Post(postID)
);
