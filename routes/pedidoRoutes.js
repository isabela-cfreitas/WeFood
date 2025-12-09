const express = require("express");
const router = express.Router();

const pedidoController = require("../controllers/pedidoController");
const verificaLogin = require("../middleware/verificaLogin");

console.log("verificarLogin:", verificaLogin);
console.log("criarPedido:", pedidoController.criarPedido);

router.post("/", verificaLogin, pedidoController.criarPedido);

module.exports = router;
