const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/clienteController");

//método post, diferente dos gets
//post: envia dados
//get: recupera dados
router.post("/", ctrl.criarCliente);//chama função do controller

router.get("/:email", ctrl.getClientePorEmail)

router.post("/login", ctrl.loginCliente);

module.exports = router;
