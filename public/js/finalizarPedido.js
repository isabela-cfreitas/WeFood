document.addEventListener("DOMContentLoaded", () => {
    carregarEnderecos();
    carregarResumo();
});


async function carregarEnderecos() {
    try {
        const resp = await fetch("/api/logado");
        const dados = await resp.json();

        if (!dados.logado || dados.tipo !== "cliente") {
            console.warn("Cliente não logado.");
            return;
        }

        const endereco = dados.endereco;

        renderizarEnderecos([{ id: 1, endereco }]);

    } catch (erro) {
        console.error("Erro ao carregar endereços:", erro);
    }
}


function renderizarEnderecos(lista) {
    const select = document.getElementById("enderecos");
    select.innerHTML = "";

    lista.forEach(end => {
        const opt = document.createElement("option");
        opt.value = end.id;
        opt.textContent = end.endereco;
        select.appendChild(opt);
    });
}

async function carregarResumo() {
    const resumo = document.getElementById("resumo");
    resumo.innerHTML = "";

    const resp = await fetch("/api/carrinho/meu-carrinho");
    if (!resp.ok) {
        resumo.textContent = "Erro ao carregar carrinho.";
        return;
    }

    const itens = await resp.json();

    let total = 0;

    itens.forEach(item => {
        if (!item.idItem) return;

        const linha = document.createElement("div");
        linha.classList.add("itemResumo");

        const subtotal = item.precoProduto * item.quantidade;
        total += subtotal;

        linha.textContent = `${item.nomeProduto} x${item.quantidade} — R$ ${subtotal.toFixed(2)}`;
        resumo.appendChild(linha);
    });

    const totalDiv = document.createElement("h3");
    totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
    resumo.appendChild(totalDiv);
}

document.getElementById("btnEnviarPedido").addEventListener("click", async () => {
    const entrega = document.querySelector("input[name='entrega']:checked");
    const pagamento = document.querySelector("input[name='pagamento']:checked");
    const observacoes = document.getElementById("observacoes").value;

    if (!entrega || !pagamento) {
        alert("Escolha entrega e pagamento");
        return;
    }

    const resp = await fetch("/api/pedido", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            entrega: entrega.value,
            pagamento: pagamento.value,
            observacoes
        })
    });

    if (resp.ok) {
        alert("Pedido realizado!");
    } else {
        alert("Erro ao finalizar pedido");
    }
});
