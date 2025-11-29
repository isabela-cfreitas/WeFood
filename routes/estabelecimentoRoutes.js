const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/estabelecimentoController");

router.get("/", ctrl.listarEstabelecimentos);//recebe requisição do server.js e chama função do controller
router.get("/:id", ctrl.getEstabelecimentoPorId);
router.post("/", ctrl.criarEstabelecimento);//chama função do controller
router.get("/:email", ctrl.getEstabelecimentoPorEmail)
router.post("/login", ctrl.loginEstabelecimento);

module.exports = router;