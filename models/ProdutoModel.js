const pool = require("../db");

class ProdutoModel {
    static async getPorCnpj(cnpj) {
        const [rows] = await pool.query(
            "SELECT * FROM produtos WHERE cnpj_estabelecimento = ?",//consulta no mysql qual estabelecimento tem aquele cnpj
            [cnpj]
        );

        return rows.map(p => ({
            id_produto: p.id_produto,
            cnpj_estabelecimento: p.cnpj_estabelecimento,
            nome: p.nome,
            valor: Number(p.valor),
            imagem: p.imagem
        }));
    }
}

module.exports = ProdutoModel;
