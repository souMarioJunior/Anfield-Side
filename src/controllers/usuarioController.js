var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar); 
                        res.json({
                            idUsuario: resultadoAutenticar[0].idUsuario,
                            nomeCompleto: resultadoAutenticar[0].nomeCompleto,
                            email: resultadoAutenticar[0].email,
                            jogadorFavorito: resultadoAutenticar[0].jogadorFavorito
                            // aquarios: resultadoAquarios
                        });

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nomeCompleto = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var jogadorFavorito = req.body.jogadorServer

    if (nomeCompleto == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (jogadorFavorito == undefined) {
        res.status(400).send("Sua empresa a vincular está undefined!");
    } else {

        usuarioModel.cadastrar(nomeCompleto, email, senha, jogadorFavorito)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

const jogadorFavorito = async (req, res) => {
    const { idUser } = req.params;
    
    const jogador = await usuarioModel.getFavoritePlayerById(idUser);
        
    res.json(jogador)

}
module.exports = {
    autenticar,
    cadastrar,
    jogadorFavorito
}