var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function trocarLike(fkUsuario) {
    database.executar(`Insert into interacao (fkUsuario)`)
    // console.log(fkUsuario, fkManchete, tipo);
    // database.executar(`SELECT * FROM interacao where fkUsuario = ${fkUsuario} and fkManchete = ${fkManchete};`)
    // .then(
    //     function(resultado) {
    //         if(resultado[0] && resultado[0].tipo == 'l') {
    //             if(tipo == 'l') {
    //                 database.executar(`DELETE FROM interacao WHERE fkUsuario = ${fkUsuario} AND fkManchete = ${fkManchete}`)
    //             } else {
    //                 database.executar(`UPDATE interacao SET tipo = 'd' WHERE fkUsuario = ${fkUsuario} AND fkManchete = ${fkManchete}`);
    //             }
    //         } else {
    //              if(tipo == 'd') {
    //                 database.executar(`DELETE FROM interacao WHERE fkUsuario = ${fkUsuario} AND fkManchete = ${fkManchete}`)
    //             } else {
    //                 database.executar(`UPDATE interacao SET tipo = 'l' WHERE fkUsuario = ${fkUsuario} AND fkManchete = ${fkManchete}`);
    //             }
    //         }

    //         if (!resultado[0]) {
    //             console.log("foi")
    //             database.executar(`INSERT INTO interacao VALUES (${fkManchete}, ${fkManchete}, '${tipo}')`);
    //         }
    //     }
    // )
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

module.exports = {
    trocarLike,
    trazerLike,
    trazerDeslike
};