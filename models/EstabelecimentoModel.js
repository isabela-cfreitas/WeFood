const pool = require('../db');
const Estabelecimento = require('./estabelecimento');
class EstabelecimentoModel {
    static async getTodos() {
        const [rows] = await pool.query(`
            SELECT 
                u.id_usuario AS id,
                u.nome,
                u.numTelefone,
                u.email,
                u.hashSenha,
                e.cnpj,
                e.endereco,
                e.imagem,
                e.distancia,
                e.avaliacao,
                e.frete
            FROM usuario u
            JOIN estabelecimento e ON u.id_usuario = e.id_estabelecimento;
        `);

        return rows.map(r => 
            new Estabelecimento(
                r.id,
                r.nome,
                r.numTelefone,
                r.email,
                r.hashSenha,
                r.cnpj,
                r.endereco,
                r.imagem,
                r.distancia,
                r.avaliacao,
                r.frete
            )
        );
    }
}

module.exports = EstabelecimentoModel;
