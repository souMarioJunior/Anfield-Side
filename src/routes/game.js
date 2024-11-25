var express = require("express");
var router = express.Router();

var gameController = require("../controllers/gameController");

//Recebendo os dados do html e direcionando para a função cadastrar de gameController.js
router.post("/cadastrarPontuacao", function (req, res) {
    gameController.cadastrar(req, res);
})

module.exports = router;