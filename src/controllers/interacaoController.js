var interacaoModel = require("../models/interacaoModel");
console.log("CONTROLER CARALHO");

function trocarLike(req, res) {

  var idUsuario = req.params.idUsuario;

  interacaoModel.trocarLke(idUsuario);
  console.log(idUsuario)
  res.json();
}

function trazerLike(req, res) {
  interacaoModel.trazerLike()
  .then(
    function(resultadoAutenticar) {
      res.status(200).json(resultadoAutenticar)
    }
  ) .catch(
    function(erro) {
      res.status(500).json(erro.sqlMessage)
    }
  )
}

function trazerDeslike(req, res) {
  interacaoModel.trazerDeslike()
  .then(
    function(resultadoAutenticar) {
      res.status(200).json(resultadoAutenticar)
    }
  ) .catch(
    function(erro) {
      res.status(500).json(erro.sqlMessage)
    }
  )
}

module.exports = {
  trocarLike,
  trazerLike,
  trazerDeslike
};
