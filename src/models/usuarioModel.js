var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nomeCompleto, email, jogadorFavorito FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// idUsuario int primary key auto_increment,
// nomeCompleto varchar(100),
// email varchar(319),
// senha varchar(28),
// jogadorFavorito varchar(30),

function cadastrar(nome, email, senha, jogadorFavorito) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, jogadorFavorito);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nomeCompleto, email, senha, jogadorFavorito) VALUES ('${nome}', '${email}', '${senha}', '${jogadorFavorito}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

async function getFavoritePlayerById(idUser){
    console.log('cheguei na model');

    const jogador = await database.executar(`SELECT jogadorFavorito FROM usuario WHERE idUsuario = ${idUser}`);

    return jogador
}

module.exports = {
    autenticar,
    cadastrar,
    getFavoritePlayerById
};

