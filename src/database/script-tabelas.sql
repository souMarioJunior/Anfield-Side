create database anfieldSide;

use anfieldSide;

create table usuario (
idUsuario int primary key auto_increment,
nomeCompleto varchar(100),
email varchar(319),
senha varchar(28),
jogadorFavorito varchar(30),
usuarioLikes int,
usuarioDeslikes int,
bio varchar(120)
);

create table quiz (
idQuiz int primary key auto_increment,
acertos int,
erros int,
tentativas int,
fkUsuario int,
constraint foreignKeyUsuario foreign key (fkUsuario) references usuario (idUsuario)
);

create table manchete (
idManchete int primary key auto_increment,
titulo varchar(15),
descricao varchar(500),
noticiaLikes int,
noticiaDeslikes int
);

create table interacao (
fkUsuario int,
fkManchete int,
constraint foreignKeyUsuarioInteracao foreign key (fkUsuario) references usuario (idUsuario),
constraint foreignKeyMancheteInteracao foreign key (fkManchete) references manchete (idManchete),
constraint pks primary key(fkUsuario, fkManchete)
)