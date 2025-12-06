const pool = require("../db");

class CarrinhoModel {

    static async buscarCarrinhoCliente(idCliente) {
        try {
            const [rows] = await pool.query(
                `
                SELECT 
                    c.id AS idCarrinho,
                    c.id_cliente,
                    ic.id AS idItem,
                    ic.id_produto,
                    ic.quantidade,
                    p.nome AS nomeProduto,
                    p.valor AS precoProduto,
                    p.imagem
                FROM carrinho c
                LEFT JOIN item_carrinho ic 
                    ON c.id = ic.id_carrinho
                LEFT JOIN produtos p 
                    ON ic.id_produto = p.id_produto
                WHERE c.id_cliente = 8;
                `,
                [idCliente]
            );

            return rows;
        } catch (err) {
            console.error("ERRO NO MODEL CARRINHO:", err);
            throw err;
        }
    }

}

module.exports = CarrinhoModel;
