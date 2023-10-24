#inserindo no banco de dados

#Insert 
#INSERT INTO hotel.funcionario(nome, cargo) VALUES ('Paulo', 'Gerente');

#Deleter funcionário 2 que eu add repetido
#DELETE FROM hotel.funcionario WHERE idfuncionario = 2;

#Selecionando todos os dados
#SELECT * FROM hotel.funcionario;

##############################################################

#Inserindo dados na tabela serviço
#INSERT INTO hotel.servico(descricao, local, data_de_abertura, data_de_fechamento, status) VALUES ('Ajuste mangueria do ar condicionado', 'Terraço 2', '2000-02-04', '2000-02-06', 'finalizado');



#Selecionando todos os serviços
SELECT * FROM hotel.servico;
