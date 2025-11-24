async function enviarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cpf = document.getElementById("cpf").value;

    const cep = document.getElementById("cep").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const complemento = document.getElementById("complemento").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;

    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    const enderecoCompleto = `${rua}, ${numero}, ${bairro}, ${cidade}, CEP ${cep}, Compl: ${complemento}`;

    const dados = {
        nome,
        telefone,
        email,
        senha,
        cpf,
        endereco: enderecoCompleto
    };

    try {
        const resposta = await fetch("/api/clientes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        });

        const resultado = await resposta.json();

        if (resposta.ok) {
            alert("Cliente cadastrado com sucesso!");
            window.location.href = "/LoginCliente";
        } else {
            alert("Erro: " + resultado.erro);
        }

    } catch (erro) {
        console.error("Erro no fetch:", erro);
        alert("Falha ao enviar dados.");
    }
}
