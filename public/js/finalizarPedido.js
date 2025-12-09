document.addEventListener("DOMContentLoaded", () => {
    carregarEnderecos();

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


