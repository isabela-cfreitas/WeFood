const express = require('express');
const app = express();
const path = require('path');

const estRoutes = require("./routes/estabelecimentoRoutes");//recebe requisição e joga para rotas de estabelecimento
const produtoRoutes = require("./routes/produtoRoutes"); //joga a requisição para rotas de produto

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/estabelecimentos", estRoutes);
app.use("/api/produtos", produtoRoutes);

app.listen(1504, ()=> {
    console.log('servidor no ar: http://localhost:1504');
});
