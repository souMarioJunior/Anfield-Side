var mancheteModel = require("../models/mancheteModel");

function listarManchetes(req, res) {
    var idUsuario = req.body.idUsuario;
    console.log(idUsuario)

        mancheteModel.listarManchetes(idUsuario)
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

module.exports = {
    listarManchetes
}