var interacaoModel = require("../models/interacaoModel");

function cadastrar(requisicao, resposta) {
  var fkUsuario = requisicao.body.fkUsuario;
  var fkManchete = requisicao.body.fkManchete;
  var tipo = requisicao.body.tipo;

  if (fkUsuario == undefined || fkManchete == undefined || tipo == undefined) {
    resposta.status(400).send("Parâmetros undefined")
  } else {
    interacaoModel.cadastrar(fkUsuario, fkManchete, tipo)
  }
}

function olaMundo(requisicao, resposta) {
  resposta.status(200).send("Olá mundo!");
}

module.exports = {
  cadastrar,
  // olaMundo
};
