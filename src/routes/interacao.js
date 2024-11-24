var express = require("express");
var router = express.Router();

var interacaoController = require("../controllers/interacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de interacaoController.js
router.post("/cadastrar", function (req, res) {
    interacaoController.cadastrar(req, res);
})

router.get("/olaMundo", function (requisicao, resposta) {
    interacaoController.olaMundo(requisicao, resposta);
}
)

module.exports = router;