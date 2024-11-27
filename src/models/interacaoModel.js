var database = require("../database/config")
// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function trocarLike(fkUsuario) {
    database.executar(`Insert into interacao (fkUsuario)`)
}

function trazerLike() {
    console.log('To dentro da Model com trazer likes >:)')
    var instrucaoSql = `select idManchete as 'id', noticiaLikes as 'Likes' from manchete;`
    return database.executar(instrucaoSql); 
}

function trazerDeslike() {
    console.log('To dentro da Model com trazer likes >:)')
    var instrucaoSql = `select idManchete as 'id', noticiaDeslikes as 'Deslikes' from manchete;`
    return database.executar(instrucaoSql); 
}

function darLike(manchete) {
    console.log('To dentro da Model com dar likes >:)')
    var instrucaoSql = `
    update manchete
    set noticiaLikes = noticiaLikes + 1
    where idManchete = ${manchete}
    `
    return database.executar(instrucaoSql); 
}

function darDeslike(manchete) {
    console.log('To dentro da Model com dar deslikes >:)')
    var instrucaoSql = `
    update manchete
    set noticiaDeslikes = noticiaDeslikes + 1
    where idManchete = ${manchete}
    `
    return database.executar(instrucaoSql); 
}

function inserirLikeNoBanco(manchete, idUsuario) {
    console.log('To dentro da Model com dar deslikes >:)')
    var instrucaoSql = `
    insert into interacao values
    (${idUsuario}, ${manchete}, '1')
    `
    return database.executar(instrucaoSql); 
}
function inserirDeslikeNoBanco(manchete, idUsuario) {
    console.log('To dentro da Model com dar deslikes >:)')
    var instrucaoSql = `
    insert into interacao values
    (${idUsuario}, ${manchete}, '0')
    `
    return database.executar(instrucaoSql); 
}

function preencherLike(idUsuario) {
    console.log('To dentro da Model com preencher likes >:)')
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
    trazerDeslikesDashboard
};