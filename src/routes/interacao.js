var express = require("express");
var router = express.Router();

var interacaoController = require("../controllers/interacaoController");

    router.post("/interagir", function(req, res) {
        interacaoController.trocarLike(req, res)
    })

module.exports = router;