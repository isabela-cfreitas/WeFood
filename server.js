const express = require('express');
const app = express();
const path = require('path');

app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'public')));

const estRoutes = require("./routes/estabelecimentoRoutes");//recebe requisição e joga para rotas de estabelecimento
const produtoRoutes = require("./routes/produtoRoutes"); //joga a requisição para rotas de produto
const clienteRoutes = require("./routes/clienteRoutes");

// app.use(express.json()); 
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/estabelecimentos", estRoutes);
app.use("/api/produtos", produtoRoutes);

app.get("/CadastroCliente", (req,res) => {
    res.sendFile(path.join(__dirname,"public","cadastroCliente.html"));
});

app.get("/CadastroEstabelecimento", (req,res) => {
    res.sendFile(path.join(__dirname,"public","cadastroEstabelecimento.html"));
});

app.use("/api/clientes", clienteRoutes);

app.get("/LoginCliente", (req,res) => {
    res.sendFile(path.join(__dirname,"public","loginCliente.html"));
});

// app.get("/LoginEstabelecimento", (req,res) => {
//     res.sendFile(path.join(__dirname,"public","loginCliente.html"));
// });


app.listen(1504, ()=> {
    console.log('servidor no ar: http://localhost:1504');
});
