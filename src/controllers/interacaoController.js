var interacaoModel = require("../models/interacaoModel");

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

function darLike(req, res) {
  var manchete = req.params.manchete;
  interacaoModel.darLike(manchete)
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

function darDeslike(req, res) {
  var manchete = req.params.manchete;
  interacaoModel.darDeslike(manchete)
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

function inserirLikeNoBanco(req, res) {
  var manchete = req.params.manchete;
  var idUsuario = req.params.idUsuario;
  interacaoModel.inserirLikeNoBanco(manchete, idUsuario)
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
function inserirDeslikeNoBanco(req, res) {
  var manchete = req.params.manchete;
  var idUsuario = req.params.idUsuario;
  interacaoModel.inserirDeslikeNoBanco(manchete, idUsuario)
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

function preencherLike(req, res) {
  var idUsuario = req.params.idUsuario;
  interacaoModel.preencherLike(idUsuario)
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

function trazerLikesDashboard(req, res) {
  var idUsuario = req.params.idUsuario
  interacaoModel.trazerLikesDashboard(idUsuario)
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

function trazerDeslikesDashboard(req, res) {
  var idUsuario = req.params.idUsuario
  interacaoModel.trazerDeslikesDashboard(idUsuario)
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
  trazerDeslike,
  darLike,
  darDeslike,
  inserirLikeNoBanco,
  inserirDeslikeNoBanco,
  preencherLike,
  trazerLikesDashboard,
  trazerDeslikesDashboard
};
