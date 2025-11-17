const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/estabelecimentoController");

router.get("/", ctrl.listarEstabelecimentos);//recebe requisição do server.js e chama função do controller

module.exports = router;
