const Usuario = require("./usuario");

class Estabelecimento extends Usuario {
    constructor(id, nome, telefone, email, senha, cnpj, endereco, imagem, distancia, avaliacao, frete) {
        super(id, nome, telefone, email, senha);

        this._cnpj = cnpj;
        this._endereco = endereco;
        this._imagem = imagem;
        this._distancia = distancia;
        this._avaliacao = avaliacao;
        this._frete = frete;
    }

    toJSON() {
        return {
            id: this._id,
            nome: this._nome,
            numTelefone: this._numTelefone,
            email: this._email,
            cnpj: this._cnpj,
            endereco: this._endereco,
            imagem: this._imagem,
            distancia: this._distancia,
            avaliacao: this._avaliacao,
            frete: this._frete
        };
    }
}

module.exports = Estabelecimento;
