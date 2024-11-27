var express = require("express");
var router = express.Router();

var interacaoController = require("../controllers/interacaoController");

    router.post("/trocarLike/:idUsuario", function(req, res) {
        interacaoController.trocarLike(req, res);
    })

    router.get("/trazerLike", function(req, res) {
        interacaoController.trazerLike(req, res);
    })

    router.get("/trazerLikesDashboard/:idUsuario", function(req, res) {
        interacaoController.trazerLikesDashboard(req, res);
    })

    router.get("/trazerDeslikesDashboard/:idUsuario", function(req, res) {
        interacaoController.trazerDeslikesDashboard(req, res);
    })

    router.get("/trazerRecorde/:idUsuario", function(req, res) {
        interacaoController.trazerRecorde(req, res);
    })

    router.get("/ranking", function(req, res) {
        interacaoController.ranking(req, res);
    })

    router.get("/historico/:idUsuario", function(req, res) {
        interacaoController.historico(req, res);
    })

    router.get("/trazerDeslike", function(req, res) {
        interacaoController.trazerDeslike(req, res);
    })

    router.put("/darLike/:manchete", function(req, res) {
        interacaoController.darLike(req, res);
    })

    router.put("/darDeslike/:manchete", function(req, res) {
        interacaoController.darDeslike(req, res);
    })

    router.post("/inserirLikeNoBanco/:manchete/:idUsuario", function(req, res) {
        interacaoController.inserirLikeNoBanco(req, res);
    })

    router.get("/preencherLike/:idUsuario", function(req, res) {
        interacaoController.preencherLike(req, res);
    })
    router.post("/inserirDeslikeNoBanco/:manchete/:idUsuario", function(req, res) {
        interacaoController.inserirDeslikeNoBanco(req, res);
    })



module.exports = router;