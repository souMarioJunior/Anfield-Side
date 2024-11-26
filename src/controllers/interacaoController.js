var interacaoModel = require("../models/interacaoModel");

function trocarLike(req, res) {
  var idUsuario = req.body.idUsuario;
  var idManchete = req.body.idManchete;
  var tipo = req.body.tipo;

  interacaoModel.atualizarLike(idUsuario, idManchete, tipo);

  res.json();
}

module.exports = {
  trocarLike
};
