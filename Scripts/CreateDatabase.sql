create table portal_noticias;

use portal_noticias;

create table noticias (
	id_noticia int not null primary key auto_increment,
	titulo varchar(100),
	autor varchar(100),
	data_noticia datetime,
	resumo varchar(500),
	data_criacao datetime
);

insert noticias (titulo, autor, data_noticia, resumo, data_criacao) values ('teste titulo', 'autor teste', current_timestamp(), 'resumo teste', current_timestamp());

