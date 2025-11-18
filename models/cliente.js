class Cliente extends Usuario {
    constructor(nome, numTelefone, email, hashSenha, cpf, enderecos, carrinho) {
        super(nome, numTelefone, email, hashSenha);
        this._cpf = cpf;
        this._enderecos = enderecos;
        this._carrinho = carrinho;
    }

    get cpf() {
        return this._cpf;
    }

    get enderecos() {
        return this._enderecos;
    }

    get carrinho() {
        return this._carrinho;
    }

    set enderecos(enderecos) {
        this._enderecos = enderecos;
    }

    set carrinho(carrinho) {
        this._carrinho;
    }
    
    toJSON() {
        return {
            nome: this.nome,
            numTelefone: this.numTelefone,
            email: this.email,
            hashSenha: this.hashSenha,
            cpf: this.cpf,
            endereco: this.endereco,
            carrinho: this.carrinho
        };
    }
}