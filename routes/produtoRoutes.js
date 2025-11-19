const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/produtoController");

router.get("/:cnpj", ctrl.listarPorCnpj);

module.exports = router;
