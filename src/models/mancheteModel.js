var database = require("../database/config")

function listarManchetes(idUsuario) {
    var instrucaoSql = `
        SELECT manchete.*, interacao.tipo FROM manchete LEFT JOIN interacao ON fkManchete = idManchete AND fkUsuario = ${idUsuario};
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    listarManchetes
};