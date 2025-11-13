const express = require('express');
const app = express();
const path = require('path');

const pool = require('./db');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/estabelecimentos', async (req, res) => {
    try {
        //const resultado = await pool.query(...);
        //const rows = resultado[0];
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

        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao consultar o banco' });
    }
});

app.listen(1504, ()=> {
    console.log('servidor no ar: http://localhost:1504');
});
