const ProdutoModel = require("../models/ProdutoModel");

async function listarPorCnpj(req, res) {
    try {
        const cnpj = decodeURIComponent(req.params.cnpj);
        const produtos = await ProdutoModel.getPorCnpj(cnpj);
        res.json(produtos);
    } catch (e) {
        console.error(e);
        res.status(500).json({ erro: "Erro ao buscar produtos" });
    }
}

module.exports = { listarPorCnpj };
