class Usuario {
    constructor (nome, numTelefone, email, hashSenha) {
        this._nome = nome;
        this._numTelefone= numTelefone;
        this._email = email;
        this._hashSenha = hashSenha;
    }

    get nome () {
        return this._nome;
    }

    get numTelefone () {
        return this._numTelefone;
    }

    get email () {
        return this._email;
    }

    get hashSenha () {
        return this._hashSenha;
    }

    set nome (nome) {
        this._nome = nome;
    }

    set numTelefone (numTelefone) {
        this._numTelefone = numTelefone;
    }

    set email (email) {
        this._email;
    }
}