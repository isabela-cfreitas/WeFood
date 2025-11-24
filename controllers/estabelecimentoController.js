const EstabelecimentoModel = require("../models/EstabelecimentoModel");
const bcrypt = require("bcrypt");

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

async function criarEstabelecimento(req, res) {
    try {
        const { nome, telefone, email, senha, cnpj, endereco, imagem, distancia, avaliacao, frete } = req.body;

        const hashSenha = await bcrypt.hash(senha, 10); //hash da senha usa função de módulo importado do express

        const usuarioData = { nome, telefone, email, hashSenha };
        const estabelecimentoData = { cnpj, endereco, imagem, distancia, avaliacao, frete };

        const novo = await EstabelecimentoModel.criarEstabelecimento(usuarioData, estabelecimentoData);

        res.json({ msg: "Estabelecimento cadastrado", id: novo.id });

    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: "Erro ao criar estabelecimento" });
    }
}

module.exports = {
    listarEstabelecimentos,
    getEstabelecimentoPorId,
    criarEstabelecimento
};
