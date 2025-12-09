const PedidoModel = require("../models/pedidoModel");

async function criarPedido(req, res) {

    try {
        const idCliente = req.session.user.id;
        const { entrega, pagamento, observacoes } = req.body;

        const pedido = await PedidoModel.criarPedido({
            idCliente,
            entrega,
            pagamento,
            observacoes
        });

        res.json({
            msg: "Pedido criado com sucesso",
            idPedido: pedido.idPedido
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: err.message });
    }
}

module.exports = {criarPedido};
