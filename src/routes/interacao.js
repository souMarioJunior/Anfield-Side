var express = require("express");
var router = express.Router();

var interacaoController = require("../controllers/interacaoController");

    router.post("/trocarLike/:idUsuario", function(req, res) {
        interacaoController.trocarLike(req, res);
        // console.log("passei na rota")
        console.log(req.params.idUsuario)
    })

    router.get("/trazerLike", function(req, res) {
        interacaoController.trazerLike(req, res);
        console.log("passei na rota de trazer like :)")
    })

    router.get("/trazerLikesDashboard/:idUsuario", function(req, res) {
        interacaoController.trazerLikesDashboard(req, res);
        // console.log("passei na rota de trazer like :)")
    })

    router.get("/trazerDeslikesDashboard/:idUsuario", function(req, res) {
        interacaoController.trazerDeslikesDashboard(req, res);
        // console.log("passei na rota de trazer like :)")
    })

    router.get("/trazerRecorde/:idUsuario", function(req, res) {
        interacaoController.trazerRecorde(req, res);
        // console.log("passei na rota de trazer like :)")
    })

    router.get("/trazerDeslike", function(req, res) {
        interacaoController.trazerDeslike(req, res);
        console.log("passei na rota de trazer deslike :)")
    })

    router.put("/darLike/:manchete", function(req, res) {
        interacaoController.darLike(req, res);
        console.log(req.params.manchete, ' idManchete')
    })

    router.put("/darDeslike/:manchete", function(req, res) {
        interacaoController.darDeslike(req, res);
        console.log(req.params.manchete, ' idManchete')
    })

    router.post("/inserirLikeNoBanco/:manchete/:idUsuario", function(req, res) {
        interacaoController.inserirLikeNoBanco(req, res);
        console.log(req.params.manchete, ' idManchete')
    })

    router.get("/preencherLike/:idUsuario", function(req, res) {
        interacaoController.preencherLike(req, res);
        console.log(req.params.idUsuario, ' ID_USUARIO NA ROTA DO PREENCHER LIKE')
    })
    router.post("/inserirDeslikeNoBanco/:manchete/:idUsuario", function(req, res) {
        interacaoController.inserirDeslikeNoBanco(req, res);
        console.log(req.params.idUsuario, ' ID_USUARIO NA ROTA DO PREENCHER deslike')
    })

module.exports = router;