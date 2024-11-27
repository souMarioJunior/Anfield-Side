var express = require("express");
var router = express.Router();

var interacaoController = require("../controllers/interacaoController");

    router.post("/trocarLike/:idUsuario", function(req, res) {
        interacaoController.trocarLike(req, res);
        console.log("passei na rota")
        console.log(req.params.idUsuario)
    })

    router.get("/trazerLike", function(req, res) {
        interacaoController.trazerLike(req, res);
        console.log("passei na rota de trazer like :)")
    })

    router.get("/trazerDeslike", function(req, res) {
        interacaoController.trazerDeslike(req, res);
        console.log("passei na rota de trazer deslike :)")
    })

module.exports = router;