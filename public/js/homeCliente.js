"use strict";

async function renderizarEstabelecimentos() {
    const container = document.getElementById("listaRestaurantes");
    container.innerHTML = ""; //limpar se ja tinha algo lá

    const resposta = await fetch("/api/estabelecimentos"); //faz requisição para server.js
    /*
    fetch usa get por padrao
    se quisesse post:
        fetch("/api/estabelecimentos", {
        method: "POST",
        body: JSON.stringify({...}),
        headers: { "Content-Type": "application/json" }
        });
    */
    const estabelecimentos = await resposta.json(); //transforma de json para array js

    estabelecimentos.forEach(est => {
        //<div class="card">
        const card = document.createElement("div");
        card.classList.add("card"); //adiciona classe cs à div

        //<img src="..." alt="...">
        const img = document.createElement("img");
        img.src = est.imagem;
        img.alt = est.nome;

        //<h4>Nome</h4>
        const titulo = document.createElement("h4");
        titulo.textContent = est.nome;

        //<p>distância • avaliação • frete</p>
        const info = document.createElement("p");
        info.textContent =
            `${est.distancia} km • ⭐ ${est.avaliacao} • Frete R$ ${est.frete}`; //$ serve para usar variaveis na string

        //monta estrutura
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(info);

        //event clique
        card.addEventListener("click", () => {
            window.location.href =
                `cardapio.html?nome=${encodeURIComponent(est.nome)}`;
        });

        container.appendChild(card); //container pega todos os cards
    });
}

document.addEventListener("DOMContentLoaded", renderizarEstabelecimentos);

