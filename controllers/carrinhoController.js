const CarrinhoModel = require("../models/carrinhoModel");

exports.getCarrinhoDoCliente = async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ erro: "Não logado" });
        }

        const idCliente = req.session.user.id;

        const itens = await CarrinhoModel.buscarCarrinhoCliente(idCliente);

        res.json(itens);

    } catch (erro) {
        console.error("ERRO NO CARRINHO:", erro);
        res.status(500).json({ erro: "Erro no servidor." });
    }
};
