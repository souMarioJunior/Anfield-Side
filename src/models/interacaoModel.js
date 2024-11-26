var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function atualizarLike(fkUsuario, fkManchete, tipo) {
    // console.log(fkUsuario, fkManchete, tipo);
    database.executar(`SELECT * FROM interacao where fkUsuario = ${fkUsuario} and fkManchete = ${fkManchete};`)
    .then(
        function(resultado) {
            if(resultado[0] && resultado[0].tipo == 'l') {
                if(tipo == 'l') {
                    database.executar(`DELETE FROM interacao WHERE fkUsuario = ${fkUsuario} AND fkManchete = ${fkManchete}`)
                } else {
                    database.executar(`UPDATE interacao SET tipo = 'd' WHERE fkUsuario = ${fkUsuario} AND fkManchete = ${fkManchete}`);
                }
            } else {
                 if(tipo == 'd') {
                    database.executar(`DELETE FROM interacao WHERE fkUsuario = ${fkUsuario} AND fkManchete = ${fkManchete}`)
                } else {
                    database.executar(`UPDATE interacao SET tipo = 'l' WHERE fkUsuario = ${fkUsuario} AND fkManchete = ${fkManchete}`);
                }
            }

            if (!resultado[0]) {
                console.log("foi")
                database.executar(`INSERT INTO interacao VALUES (${fkManchete}, ${fkManchete}, '${tipo}')`);
            }
        }
    )
}

module.exports = {
    atualizarLike
};