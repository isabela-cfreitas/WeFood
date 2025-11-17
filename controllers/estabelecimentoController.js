const EstabelecimentoModel = require("../models/EstabelecimentoModel");

async function listarEstabelecimentos(req, res) {
    try {
        const lista = await EstabelecimentoModel.getTodos();//chama model e recebe objetos da classe Estabelecimentos obtidos do banco de dados
        res.json(lista); //devolve para o navegador em forma de json
    } catch (e) {
        console.error(e);
        res.status(500).json({ erro: "Erro ao buscar estabelecimentos" });
    }
}

module.exports = { listarEstabelecimentos };
