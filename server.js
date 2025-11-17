const express = require('express');
const app = express();
const path = require('path');

const estRoutes = require("./routes/estabelecimentoRoutes");//recebe requisição e joga para rotas

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/estabelecimentos", estRoutes);

app.listen(1504, ()=> {
    console.log('servidor no ar: http://localhost:1504');
});
