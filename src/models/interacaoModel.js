var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(fkUsuario, fkManchete, tipo) {
    var instrucaoSql = `insert into interacao values (
        ${fkUsuario}, ${fkManchete}, '${tipo}'
    );`

    console.log(`Executando a instrucaoSql ${instrucaoSql}`);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};