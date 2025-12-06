const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/carrinhoController");

router.get("/meu-carrinho", ctrl.getCarrinhoDoCliente);

module.exports = router;
