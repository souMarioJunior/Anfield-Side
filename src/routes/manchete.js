var express = require("express");
var router = express.Router();

var mancheteController = require("../controllers/mancheteController");

router.post("/list", function (req, res) {
    mancheteController.listarManchetes(req, res)
})


module.exports = router;