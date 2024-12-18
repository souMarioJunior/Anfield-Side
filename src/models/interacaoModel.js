var database = require("../database/config")
// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function trocarLike(fkUsuario) {
    database.executar(`Insert into interacao (fkUsuario)`)
}

function trazerLike() {
    var instrucaoSql = `select idManchete as 'id', noticiaLikes as 'Likes' from manchete;`
    return database.executar(instrucaoSql); 
}

function trazerDeslike() {
    var instrucaoSql = `select idManchete as 'id', noticiaDeslikes as 'Deslikes' from manchete;`
    return database.executar(instrucaoSql); 
}

function darLike(manchete) {
    var instrucaoSql = `
    update manchete
    set noticiaLikes = noticiaLikes + 1
    where idManchete = ${manchete}
    `
    return database.executar(instrucaoSql); 
}

function darDeslike(manchete) {
    var instrucaoSql = `
    update manchete
    set noticiaDeslikes = noticiaDeslikes + 1
    where idManchete = ${manchete}
    `
    return database.executar(instrucaoSql); 
}

function inserirLikeNoBanco(manchete, idUsuario) {
    var instrucaoSql = `
    insert into interacao values
    (${idUsuario}, ${manchete}, '1')
    `
    return database.executar(instrucaoSql); 
}
function inserirDeslikeNoBanco(manchete, idUsuario) {
    var instrucaoSql = `
    insert into interacao values
    (${idUsuario}, ${manchete}, '0')
    `
    return database.executar(instrucaoSql); 
}

function preencherLike(idUsuario) {
    var instrucaoSql = `
    select fkManchete as post, tipo from interacao where fkUsuario = ${idUsuario};
    `
    return database.executar(instrucaoSql); 
}

function trazerLikesDashboard(idUsuario) {
    var instrucaoSql = `select count(fkManchete) as Likes from interacao where fkUsuario = ${idUsuario} and tipo = '1';`
    return database.executar(instrucaoSql);
}

function trazerDeslikesDashboard(idUsuario) {
    var instrucaoSql = `select count(fkManchete) as Deslikes from interacao where fkUsuario = ${idUsuario} and tipo = '0';`
    return database.executar(instrucaoSql);
}

function trazerRecorde(idUsuario) {
    var instrucaoSql = `select pontuacao from quiz where fkUsuario = ${idUsuario} order by pontuacao desc limit 1;`
    return database.executar(instrucaoSql);
}

function ranking(idUsuario) {
    var instrucaoSql = `select u.nomeCompleto, pontuacao from quiz join usuario as u  on fkUsuario = idUsuario order by pontuacao desc limit 5;`
    return database.executar(instrucaoSql);
}

function historico(idUsuario) {
    var instrucaoSql = `select pontuacao from quiz where fkUsuario = ${idUsuario};`
    return database.executar(instrucaoSql);
}

module.exports = {
    trocarLike,
    trazerLike,
    trazerDeslike,
    darLike,
    darDeslike,
    inserirLikeNoBanco,
    inserirDeslikeNoBanco,
    preencherLike,
    trazerLikesDashboard,
    trazerDeslikesDashboard,
    trazerRecorde,
    ranking,
    historico
};