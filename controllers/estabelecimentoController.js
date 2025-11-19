const EstabelecimentoModel = require("../models/EstabelecimentoModel");

async function listarEstabelecimentos(req, res) {
    try {
        const lista = await EstabelecimentoModel.getTodos();
        res.json(lista);
    } catch (e) {
        console.error(e);
        res.status(500).json({ erro: "Erro ao buscar estabelecimentos" });
    }
}

async function getEstabelecimentoPorId(req, res) {
    try {
        const id = req.params.id;
        const est = await EstabelecimentoModel.getPorId(id);

        if (!est) {
            return res.status(404).json({ erro: "Estabelecimento não encontrado" });
        }

        res.json(est);
    } catch (e) {
        console.error(e);
        res.status(500).json({ erro: "Erro ao buscar estabelecimento" });
    }
}

module.exports = {
    listarEstabelecimentos,
    getEstabelecimentoPorId
};
