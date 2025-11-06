class Estabelecimento extends Usuario {
  constructor(nome, numTelefone, email, hashSenha, cnpj, endereco, imagem, distancia, avaliacao, frete) {
    super(nome, numTelefone, email, hashSenha);
    this._cnpj = cnpj;
    this._endereco = endereco;
    this._imagem = imagem;
    this._distancia = distancia;
    this._avaliacao = avaliacao;
    this._frete = frete;
    this._cardapio = [];
    this._pedidos = [];
  }
}