const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/estabelecimentoController");

router.get("/", ctrl.listarEstabelecimentos);//recebe requisição do server.js e chama função do controller
router.get("/:id", ctrl.getEstabelecimentoPorId);

module.exports = router;