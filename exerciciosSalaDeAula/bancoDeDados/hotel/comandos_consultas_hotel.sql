#tabela funcionário
#CREATE TABLE `hotel`.`funcionario` (
#`idfuncionario` INT NOT NULL AUTO_INCREMENT,
#`nome` VARCHAR(45) NOT NULL,
#PRIMARY KEY (`idfuncionario`));

#Criando tabela CHAMADO
#CREATE TABLE `hotel`.`chamado` (
#`idchamado` INT NOT NULL AUTO_INCREMENT,
#`descricao` VARCHAR(45) NOT NULL,
#`data_abertura` DATE NOT NULL,
#`data_fechamento` DATE NOT NULL,
#`status` VARCHAR(10) NOT NULL,
#`fk` INT NOT NULL,
#PRIMARY KEY (`idchamado`));

#Alterando as tabelas
#ALTER TABLE `hotel`.`chamado`
#ADD INDEX `fk_idx` (`fk` ASC) VISIBLE;

#ALTER TABLE `hotel`.`chamado`
#ADD CONSTRAINT `fk`
#FOREIGN KEY (`fk`)
#REFERENCES `hotel`.`funcionario` (`idfuncionario`)
#ON DELETE NO ACTION
#ON UPDATE NO ACTION;

#criando o campo cargo
#ALTER TABLE `hotel`.`funcionario`
#ADD COLUMN `cargo` VARCHAR(45) NOT NULL AFTER `nome`;

#inserindo os primeiros dados
#INSERT INTO `hotel`.`funcionario`(nome, cargo) VALUES ('Michel', 'Jardineiro');


#Inserindo um chamado
INSERT INTO hotel.chamado(descricao, data_abertura, data_fechamento, status, fk)
	VALUES ( 'Corte da grama', '2023-10-29', '2023-10-30', 'Finalizado', 2);

#SELECT * FROM hotel.funcionario;

#SELECT * FROM hotel.chamado;


#DESATIVAR foreign key
#SHOW GLOBAL VARIABLES LIKE 'FOREIGN_KEY_CHECKS'; 

#REATIVAR foreign key
#SET FOREIGN_KEY_CHECKS=1; 

#criando o INNER JOIN entre as duas tabelas
SELECT `funcionario`.`nome`, `funcionario`.`cargo`, `chamado`.`descricao`, `chamado`.`data_abertura`, `chamado`.`data_fechamento`, `chamado`.`status`
	FROM `hotel`.`funcionario` INNER JOIN `hotel`.`chamado` ON `idfuncionario` = `fk`;

