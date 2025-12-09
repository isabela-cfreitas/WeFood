const pool = require("../db");

class PedidoModel {
    static async criarPedido({ idCliente, entrega, pagamento, observacoes }) {
        const conn = await pool.getConnection();

        try {
            await conn.beginTransaction();

            const [carrinhos] = await conn.query(
                "SELECT * FROM carrinho WHERE id_cliente = ? AND status = 'aberto' LIMIT 1",
                [idCliente]
            );

            if (carrinhos.length === 0) {
                throw new Error("Carrinho vazio");
            }

            const carrinho = carrinhos[0];

            const [itens] = await conn.query(
                `SELECT ic.*, p.nome, p.valor 
                FROM item_carrinho ic
                JOIN produtos p ON ic.id_produto = p.id_produto
                WHERE ic.id_carrinho = ?`,
                [carrinho.id]
            );

            if (itens.length === 0) {
                throw new Error("Carrinho sem itens");
            }

            const [pedidoRes] = await conn.query(
                `INSERT INTO Pedidos 
                (id_carrinho, id_cliente, id_estabelecimento, status, metodo_pag, metodo_entrega, obs)
                VALUES (?, ?, ?, 'pendente', ?, ?, ?)`,
                [
                    carrinho.id,
                    idCliente,
                    carrinho.id_estabelecimento,
                    pagamento,
                    entrega,
                    observacoes
                ]
            );

            const idPedido = pedidoRes.insertId;

            for (const item of itens) {
                await conn.query(
                    `INSERT INTO Itens_Pedido
                    (id_pedido, id_item, id_produto, produto, quantidade, preco_unitario)
                    VALUES (?, ?, ?, ?, ?, ?)`,
                    [
                        idPedido,
                        item.id,
                        item.id_produto,
                        item.nome,
                        item.quantidade,
                        item.valor
                    ]
                );
            }

            await conn.query(
                "UPDATE carrinho SET status = 'finalizado' WHERE id = ?",
                [carrinho.id]
            );

            await conn.commit();
            return { idPedido };

        } catch (err) {
            await conn.rollback();
            throw err;
        } finally {
            conn.release();
        }
    }
}

module.exports = PedidoModel;
